import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/pages/Bookmakers.module.css'
import { AnimatePresence, motion } from 'framer-motion';
import CheckboxFilter from '../../components/filters/CheckboxFilter';
import Stars from '../../components/Stars';
import { ReactSVG } from 'react-svg';
import APIRequest from '../../functions/requests/APIRequest';
import useUserInfo from '../../hooks/useUserInfo';
import { BeatLoader } from 'react-spinners';
import CasinoCard from '../../components/CasinoCard';

const slides = [1, 2, 3, 4, 5]

export default function BookmakersPage({ filters }) {
    const [bookmakers, setBookmakers] = useState([]);
    const bookmakersRef = useRef();
    const [sidebarShown, setSidebarShown] = useState(true);
    const [sort, setSort] = useState('All');
    const [page, setPage] = useState(1);
    const [filteredItems, setFilteredItems] = useState(bookmakers);
    const loadMoreRef = useRef(null);
    const user = useUserInfo()
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

    function handleFilterByCategory(item, filterName) {
        if (item === null) {
            setFilteredItems(bookmakersRef.current);
            return
        }
        switch (filterName) {
            case 'Games':
                setFilteredItems(bookmakersRef.current.filter(casino => casino.games.find(game => game.id === item.id)));
                break;
            case 'Website Language':
                setFilteredItems(bookmakersRef.current.filter(casino => casino.website_language.find(lang => lang.id === item.id)));
                break;
            case 'Support Language':
                setFilteredItems(bookmakersRef.current.filter(casino => casino.support_language.find(lang => lang.id === item.id)));
                break;
            case 'Payment Methods':
                setFilteredItems(bookmakersRef.current.filter(casino => casino.payment_methods.find(payment => payment.id === item.id)));
                break;
            case 'Countries':
                setFilteredItems(bookmakersRef.current.filter(casino => casino.countries?.find(country => country.id === item.id)));
                break;
            case 'Providers':
                setFilteredItems(bookmakersRef.current.filter(casino => casino.providers?.find(provider => provider.id === item.id)));
                break;
            default:
                setFilteredItems(bookmakersRef.current);
                break;
        }
    }

    function handleSort(filter) {
        setSort(filter);
        let newFilteredItems = [...filteredItems];
        switch (filter) {
            case 'All':
                setFilteredItems(bookmakersRef.current);
                break;
            case "BestInCountry":
                user?.country_id && (newFilteredItems = filteredItems.filter(casino => casino.countries.find(country => country.id === user.country_id)));
                newFilteredItems.sort((a, b) => b.rating - a.rating);
                setFilteredItems(newFilteredItems);
                break;
            case "BestInWorld":
                newFilteredItems.sort((a, b) => b.rating - a.rating);
                setFilteredItems(newFilteredItems);
                break;
            case "Recent":
                newFilteredItems.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setFilteredItems(newFilteredItems);
                break;
            case 'Recommended':
                newFilteredItems.sort((a, b) => b.reputation - a.reputation);
                setFilteredItems(newFilteredItems);
                break;
        }
    }

    function loadMore() {
        setLoading(true);
        APIRequest(`/bookmakers?page=${page + 1}`, 'GET')
            .then(res => {
                setPage(page++);
                setLoading(false);
                bookmakersRef.current = [...bookmakersRef.current, ...res.data]
                setFilteredItems(bookmakersRef.current);
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
        APIRequest('/bookmakers', 'GET')
            .then(res => {
                setBookmakers(res.data);
                bookmakersRef.current = res.data;
                setFilteredItems(res.data);
                observer.observe(loadMoreRef.current);
            })
            .catch(err => console.log(err))



        return () => observer.disconnect();
    }, [])

    return (
        <div className={styles.container}>
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
                            filters.map((filter, index) => (
                                <CheckboxFilter
                                    key={filter.name}
                                    title={filter.name}
                                    items={filter.items}
                                    initialOpen={index === 0}
                                    onChange={(item) => handleFilterByCategory(item, filter.name)}
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
                                className={`${styles.filterControlsItem} ${sort === 'All' && styles.active}`}
                                onClick={() => handleSort('All')}
                            >
                                All
                            </div>
                            <div
                                className={`${styles.filterControlsItem} ${sort === 'BestInCountry' && styles.active}`}
                                onClick={() => handleSort('BestInCountry')}
                            >
                                Best in your country
                            </div>
                            <div
                                className={`${styles.filterControlsItem} ${sort === 'Recent' && styles.active}`}
                                onClick={() => handleSort('Recent')}
                            >
                                Recently added
                            </div>
                            <div
                                className={`${styles.filterControlsItem} ${sort === 'Recommended' && styles.active}`}
                                onClick={() => handleSort('Recommended')}
                            >
                                Highly recommended
                            </div>
                            <div
                                className={`${styles.filterControlsItem} ${sort === 'BestInWorld' && styles.active}`}
                                onClick={() => handleSort('BestInWorld')}
                            >
                                Best of the world
                            </div>
                        </div>
                    </div>
                    <div className={styles.casinos}>
                        {
                            filteredItems.map(bookmaker => (
                                <CasinoCard {...bookmaker} key={bookmaker.id} />
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
    // const bookmakers = await APIRequest('/nolimit/bookmakers', 'GET')
    const languages = await APIRequest('/nolimit/languages', 'GET')
    const games = await APIRequest('/nolimit/games', 'GET')
    const countries = await APIRequest('/nolimit/countries', 'GET')
    const providers = await APIRequest('/nolimit/providers', 'GET')

    return {
        props: {
            // bookmakers: bookmakers.data,
            filters: [
                {
                    name: 'Popular filters',
                    items: [
                        {
                            id: 1,
                            name: 'No Deposit Bonus',
                        },
                        {
                            id: 2,
                            name: 'Deposit Bonus',
                        },
                        {
                            id: 3,
                            name: 'Mobile Devices Supported'
                        }
                    ],
                },
                {
                    name: 'Countries',
                    items: countries
                },
                {
                    name: 'Games',
                    items: games
                },
                {
                    name: 'Website Language',
                    items: languages
                },
                {
                    name: 'Support Language',
                    items: languages
                },
            ]
        },
        revalidate: 10,
    }
}

BookmakersPage.withHeader = true;
BookmakersPage.withFooter = true;