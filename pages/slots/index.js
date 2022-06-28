import React, { useState, useEffect } from 'react'
import styles from '../../styles/pages/Slots.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import CheckboxFilter from '../../components/filters/CheckboxFilter';
import CountFilter from '../../components/filters/CountFilter';
import Slot from '../../components/Slot';
import { ReactSVG } from 'react-svg';
import useWindowSize from '../../hooks/useWindowSize';
import APIRequest from '../../functions/requests/APIRequest';

const filter1 = [
    {
        id: 1,
        name: 'All',
        count: 4567,
    },
    {
        id: 2,
        name: 'ELK Studio',
        count: 45,
    },
    {
        id: 3,
        name: 'Netend',
        count: 45,
    },
    {
        id: 4,
        name: 'YGGDRASIL',
        count: 124,
    },
    {
        id: 5,
        name: 'EGT',
        count: 277,
    },
    {
        id: 6,
        name: 'PRAGMATICPLAY',
        count: 168,
    },
    {
        id: 7,
        name: 'Booming Games',
        count: 79,
    },
    {
        id: 8,
        name: 'IRON DOG',
        count: 245,
    },
    {
        id: 9,
        name: 'BETSOFT',
        count: 120,
    },
    {
        id: 10,
        name: '2by2gaming',
        count: 209,
    }
]

const filter2 = [
    {
        id: 1,
        name: 'Achievement'
    },
    {
        id: 2,
        name: 'Megaways'
    },
    {
        id: 3,
        name: 'Bonus Buy'
    },
    {
        id: 4,
        name: 'Sticky Features'
    },
    {
        id: 5,
        name: 'Jackpot'
    }
]

const sliderTemp = [1, 2, 3, 4, 5]

const _slots = [
    {
        id: 1,
        name: 'Slot 1',
        provider: 'ELK Studio',
        type: 'Achievement',
        rating: 4.5,
    },
    {
        id: 2,
        name: 'Slot 2',
        provider: 'Netend',
        type: 'Megaways',
        rating: 4.5,
    },
    {
        id: 3,
        name: 'Slot 3',
        provider: 'YGGDRASIL',
        type: 'Bonus Buy',
        rating: 4.5,
    },
    {
        id: 4,
        name: 'Slot 4',
        provider: 'EGT',
        type: 'Sticky Features',
        rating: 4.5,
    },
    {
        id: 5,
        name: 'Slot 5',
        provider: 'PRAGMATICPLAY',
        type: 'Jackpot',
        rating: 4.5,
    },
    {
        id: 6,
        name: 'Slot 6',
        provider: 'Booming Games',
        type: 'Achievement',
        rating: 4.5,
    },
    {
        id: 7,
        name: 'Slot 7',
        provider: 'IRON DOG',
        type: 'Megaways',
        rating: 4.5,
    },
    {
        id: 8,
        name: 'Slot 8',
        provider: 'BETSOFT',
        type: 'Bonus Buy',
        rating: 4.5,
    },
    {
        id: 9,
        name: 'Slot 9',
        provider: '2by2gaming',
        type: 'Sticky Features',
        rating: 4.5,
    }
]

export default function SlotsPage({ slots, providers }) {
    const [sidebarShown, setSidebarShown] = useState(true);
    const [filter, setFilter] = useState('All');
    const [availableProviders, setAvailableProviders] = useState(providers.filter(prov => prov.count>0))
    const { height, width } = useWindowSize();
    const [slotsFiltered, setSlotsFiltered] = useState(slots)
    const [providerFilter, setProviderFilter] = useState(availableProviders[0]);

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
            marginLeft: 'calc(25% + 30px)',
            width: 'calc(75% - 30px)',
            transition: {
                duration: 0.5,
            }
        }
    }

    useEffect(()=>{
        let slotsF = [...slots]
        if (providerFilter.id!=0) {
            slotsF = slotsF.filter(slot => slot.provider_id == providerFilter.id)
        }        
        switch (filter) {
            case "New":
                slotsF = slotsF.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))
                break;
            case "Popular":
                slotsF = slotsF.sort((a,b) => b.popularity - a.popularity)
                break;
            case "Promotions":
                slotsF = slotsF.sort((a,b) => b.featured - a.featured)
                break;
            default:
                break;
        }
        setSlotsFiltered(slotsF)
    },[providerFilter, filter])

    function renderSlots(sidebarShown) {
        // breaks the layout when first slot is big
        let column = 1;
        let row = 1;
        const maxColumns = sidebarShown ? 3 : 4;
        return slotsFiltered.map((item, index) => {
            const slot = <Slot
                {...item}
                key={`slot_${item.id}`}
                big={index === 0}
                style={{
                    gridColumnStart: column,
                    gridColumnEnd: index === 0 ? 3 : (column + 1),
                    gridRowStart: row,
                    gridRowEnd: row + 1,
                }}
            />
            if (index === 0) {
                column = 3;
                return slot;
            }
            column < maxColumns ? column++ : (column = 1, row++)
            return slot
        })
    }

    return (
        <div className={styles.container}>
            <AnimatePresence
                exitBeforeEnter
                initial={false}
            >
                {sidebarShown && <motion.div
                    variants={sidebarVariants}
                    animate='shown'
                    exit="hidden"
                    className={styles.filters}
                >
                    <div className={styles.filtersBlocks}>
                        <CountFilter 
                            items={availableProviders} 
                            onChange={setProviderFilter} 
                            initialActive={0}
                        />
                        {/* <CheckboxFilter items={filter2} /> */}
                    </div>                    
                </motion.div>}
            </AnimatePresence>
            <motion.div
                variants={contentVariants}
                animate={sidebarShown ? 'narrow' : 'wide'}
                className={styles.content}
            >
                <div className={styles.slider}>
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        spaceBetween={21}
                        pagination={{
                            clickable: true,
                            bulletClass: styles.bullet,
                            bulletActiveClass: styles.bulletActive,
                            horizontalClass: styles.pagination,
                        }}
                    >
                        {
                            sliderTemp.map(item => (
                                <SwiperSlide key={`slide_${item}`}>
                                    <div className={styles.slide} >
                                        <Image
                                            src="/images/slots/slide.png"
                                            alt="slide"
                                            layout="fill"
                                            objectFit='cover'
                                        />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
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
                            className={`${styles.filterControlsItem} ${filter === 'New' && styles.active}`}
                            onClick={() => setFilter('New')}
                        >
                            New
                        </div>
                        <div
                            className={`${styles.filterControlsItem} ${filter === 'Popular' && styles.active}`}
                            onClick={() => setFilter('Popular')}
                        >
                            Popular
                        </div>
                        <div
                            className={`${styles.filterControlsItem} ${filter === 'Promotions' && styles.active}`}
                            onClick={() => setFilter('Promotions')}
                        >
                            Promotions
                        </div>
                    </div>
                </div>
                <div
                    style={sidebarShown ? {gridTemplateColumns: 'repeat(3, 1fr)'} : {gridTemplateColumns: 'repeat(4, 1fr)'}}
                    className={styles.slots}
                >
                    {
                        renderSlots(sidebarShown)
                    }
                </div>
            </motion.div>
        </div>
    )
}

export async function getStaticProps() {
    const slots = await APIRequest('/slots?no_paginate=1', 'GET')
    const providers = await APIRequest('/providers', 'GET')
    let slotsWithProvider = slots.filter(slot => slot).map(slot => (
        {
            ...slot,
            provider:providers.filter(p => p.id==slot.provider_id)[0]?.name ?? null
        }
    ))

    return {
        props: {
            slots: slotsWithProvider,  
            providers: [
                {
                    id:0, 
                    name: "All", 
                    count: slotsWithProvider.length
                },
                ...providers.map(provider => (
                    {
                        ...provider,
                        count: slotsWithProvider
                            .filter(slot => slot.provider_id==provider.id)
                            .length
                    }
                ))
            ]          
        },
        revalidate: 10,
    }
}

SlotsPage.withHeader = true;
SlotsPage.withFooter = true;