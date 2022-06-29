import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react'
import { SwiperSlide } from 'swiper/react';
import SliderWithControls from '../../components/SliderWithControls';
import styles from '../../styles/pages/Bonuses.module.css'
import { AnimatePresence, motion } from 'framer-motion';
import CheckboxFilter from '../../components/filters/CheckboxFilter';
import Stars from '../../components/Stars';
import { ReactSVG } from 'react-svg';
import APIRequest from '../../functions/requests/APIRequest'
import Link from 'next/link'
import { BeatLoader } from 'react-spinners'
import TermsModal from '../../components/TermsModal';
import BonusCard from '../../components/BonusCard';

const slides = [1, 2, 3, 4, 5]

export default function BonusesPage({ bonuses, filters }) {
    const [sidebarShown, setSidebarShown] = useState(true);
    const [filter, setFilter] = useState('All');
    const bonusesRef = useRef(bonuses);
    const [filteredItems, setFilteredItems] = useState(bonuses);
    const [page, setPage] = useState(1);
    const loadMoreRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const controlVariants = {
        left: {
            left: 0,
            right: 'unset'
        },
        right: {
            left: 'unset',
            right: 0
        }
    }

    const sidebarVariants = {
        shown: {
            opacity: [0, 1],
            transition: {
                duration: 0.5,
            }
        },
        hidden: {
            opacity: [1, 0],
            transition: {
                duration: 0.5,
            }
        }
    }

    const contentVariants = {
        wide: {
            marginLeft: 0,
            width: '100%',
            transition: {
                duration: 0.5,
            }
        },
        narrow: {
            marginLeft: 'calc(20% + 30px)',
            width: '80%',
            transition: {
                duration: 0.5,
            }
        }
    }

    useEffect(()=>{
        let filteredItemsN = [...bonusesRef.current]
        switch (filter) {
            case "Best for you":
                filteredItemsN = filteredItemsN.sort((a,b) => (b.best_for_you - a.best_for_you))
                break;
            case "Recently added":
                filteredItemsN = filteredItemsN.sort((a,b) => (new Date(b.created_at) - new Date(a.created_at)))
                break;
            default:
                break;
        }
        setFilteredItems(filteredItemsN)
    },[filter])

    function loadMore() {
        setLoading(true);
        APIRequest(`/bonuses?page=${page + 1}`, 'GET')
            .then(res => {
                setPage(page++);
                let newDataF = [...res.data]
                switch (filter) {
                    case "Best for you":
                        newDataF = newDataF.sort((a,b) => (b.best_for_you - a.best_for_you))
                        break;
                    case "Recently added":
                        newDataF = newDataF.sort((a,b) => (new Date(b.created_at) - new Date(a.created_at)))
                        break;
                    default:
                        break;
                }
                setFilteredItems([...bonusesRef.current, ...newDataF]);
                bonusesRef.current = [...bonusesRef.current, ...res.data]
                setLoading(false);
            })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMore();
                }
            }
        )
        observer.observe(loadMoreRef.current);
        return () => observer.disconnect();
    }, [])

    return (
        <div className={styles.container}>
            <div>
                <SliderWithControls loop>
                    {
                        slides.map(slide => (
                            <SwiperSlide
                                key={`slide_${slide}`}
                                className={styles.sliderBlock}
                            >
                                <div>
                                    <Image
                                        className={styles.sliderPicture}
                                        src="/placeholder.png"
                                        layout='fill'
                                        objectFit='cover'
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </SliderWithControls>
            </div>
            <div className={styles.contentContainer}>
                <AnimatePresence
                    initial={false}
                >
                    {sidebarShown && <motion.div
                        variants={sidebarVariants}
                        animate="shown"
                        exit="hidden"
                        className={styles.filters}
                    >
                        <span className={styles.filtersTitle}>
                            <Image
                                src={'/images/icons/filter.svg'}
                                height={20}
                                width={20}
                            />
                            Filters
                        </span>
                        {
                            filters?.map((filter, index) => (
                                <CheckboxFilter
                                    key={filter.name}
                                    title={filter.name}
                                    items={filter.items}
                                    initialOpen={index === 0}
                                    collapsible
                                />
                            ))
                        }
                    </motion.div>}
                </AnimatePresence>
                <motion.div
                    variants={contentVariants}
                    animate={sidebarShown ? 'narrow' : 'wide'}
                    className={styles.content}
                >
                    <div className={styles.controls}>
                        <div
                            className={styles.sidebarControls}
                            onClick={() => setSidebarShown(!sidebarShown)}
                        >
                            <motion.div
                                variants={controlVariants}
                                animate={sidebarShown ? 'left' : 'right'}
                                className={styles.sidebarControlsSlide}
                            />
                            <div className={styles.sidebarControlsItem}>
                                <ReactSVG
                                    src='/images/icons/layout-sidebar.svg'
                                    className={sidebarShown ? styles.light : styles.dark}
                                    height={24}
                                    width={24}
                                />
                            </div>
                            <div className={styles.sidebarControlsItem}>
                                <ReactSVG
                                    src='/images/icons/layout-sidebar-left-collapse.svg'
                                    className={sidebarShown ? styles.dark : styles.light}
                                    height={24}
                                    width={24}
                                />
                            </div>
                        </div>
                        <div className={styles.filterControls}>
                            <div
                                className={`${styles.filterControlsItem} ${filter === 'All' && styles.active}`}
                                onClick={() => setFilter('All')}
                            >
                                All
                            </div>
                            <div
                                className={`${styles.filterControlsItem} ${filter === 'Best for you' && styles.active}`}
                                onClick={() => setFilter('Best for you')}
                            >
                                Best for you
                            </div>
                            <div
                                className={`${styles.filterControlsItem} ${filter === 'Recently added' && styles.active}`}
                                onClick={() => setFilter('Recently added')}
                            >
                                Recently added
                            </div>
                        </div>
                    </div>
                    <div className={styles.casinos}>
                        {
                            filteredItems.map((bonus, index) => (
                                <BonusCard {...bonus} key={`bonus_${bonus.id}_${index}`} />
                            ))
                        }
                        {filteredItems.length > 5 && <div className={styles.loader} ref={loadMoreRef} >
                            <BeatLoader loading={loading} color='#7F3FFC' />
                        </div>}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const bonuses = await APIRequest('/bonuses', 'GET')

    return {
        props: {
            bonuses: bonuses.data       
        },
        revalidate: 10,
    }
}

BonusesPage.withHeader = true;
BonusesPage.withFooter = true;