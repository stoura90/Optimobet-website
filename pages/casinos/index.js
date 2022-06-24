import Image from 'next/image';
import React, { useState } from 'react'
import { SwiperSlide } from 'swiper/react';
import SliderWithControls from '../../components/SliderWithControls';
import styles from '../../styles/pages/Casinos.module.css'
import { AnimatePresence, motion } from 'framer-motion';
import CheckboxFilter from '../../components/filters/CheckboxFilter';
import Stars from '../../components/Stars';
import { ReactSVG } from 'react-svg';
import APIRequest from '../../functions/requests/APIRequest';
import Link from 'next/link';

const filters = [
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
        items: [
            {
                id: 1,
                name: "Georgia"
            },
            {
                id: 2,
                name: "US"
            },
            {
                id: 3,
                name: "Canada"
            },
            {
                id: 4,
                name: "UK"
            }
        ]
    },
    {
        name: 'Games',
        items: [
            {
                id: 1,
                name: 'Slots'
            },
            {
                id: 2,
                name: 'Live Casino'
            },
            {
                id: 3,
                name: 'Table Games'
            },
            {
                id: 4,
                name: 'Poker'
            }
        ]
    },
    {
        name: 'Providers',
        items: [
            {
                id: 1,
                name: 'IVI Casino'
            },
            {
                id: 2,
                name: 'IG Casino'
            },
            {
                id: 3,
                name: 'VIP Casino'
            },
            {
                id: 4,
                name: 'V Casino'
            }
        ]
    },
    {
        name: 'Payment',
        items: [
            {
                id: 1,
                name: 'Online'
            },
            {
                id: 2,
                name: 'Cash'
            },
            {
                id: 3,
                name: 'Both'
            }
        ]
    },
    {
        name: 'Website Language',
        items: [
            {
                id: 1,
                name: 'Georgian',
            },
            {
                id: 2,
                name: 'English',
            },
            {
                id: 3,
                name: 'Russian',
            }
        ]
    },
    {
        name: 'Support Language',
        items: [
            {
                id: 1,
                name: 'Georgian',
            },
            {
                id: 2,
                name: 'English',
            },
            {
                id: 3,
                name: 'Russian',
            }
        ]
    }

]

const casinos = [
    {
        name: 'IVI Casino',
        rating: 4.5,
        tags: ['Popular', 'Deposit Bonus', 'Mobile Devices Supported'],
        games: ['Slots', 'Live Casino', 'Table Games', 'Poker']
    },
    {
        name: 'IG Casino',
        rating: 4.5,
        tags: ['Popular', 'Deposit Bonus', 'Mobile Devices Supported'],
        games: ['Slots', 'Live Casino', 'Table Games', 'Poker']
    },
    {
        name: 'VIP Casino',
        rating: 4.5,
        tags: ['Popular', 'Deposit Bonus', 'Mobile Devices Supported'],
        games: ['Slots', 'Live Casino', 'Table Games', 'Poker']
    },
    {
        name: 'V Casino',
        rating: 4.5,
        tags: ['Popular', 'Deposit Bonus', 'Mobile Devices Supported'],
        games: ['Slots', 'Live Casino', 'Table Games', 'Poker']
    }
]

const slides = [1, 2, 3, 4, 5]

export default function CasinosPage({ casinos, filters }) {
    const [sidebarShown, setSidebarShown] = useState(true);
    const [sort, setSort] = useState('All');
    const [filteredItems, setFilteredItems] = useState(casinos);

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
        switch (filterName) {
            case 'Games':
                setFilteredItems(casinos.filter(casino => casino.games.find(game => game.id === item.id)));
                break;
            case 'Website Language':
                setFilteredItems(casinos.filter(casino => casino.single_website_language.id == item.id));
                break;
            case 'Support Language':
                setFilteredItems(casinos.filter(casino => casino.single_support_language.id == item.id));
                break;
            case 'Payment Methods':
                setFilteredItems(casinos.filter(casino => casino.payment_methods.find(payment => payment.id === item.id)));
                break;
        }
    }

    function handleSort(filter) {
        setSort(filter);
        let newFilteredItems = [...filteredItems];
        switch (filter) {
            case 'All':
                setFilteredItems(casinos);
                break;
            case 'New':
                setFilteredItems(newFilteredItems.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)));
                break;
            case 'Popular':
                setFilteredItems(newFilteredItems.sort((a, b) => b.rating - a.rating));
                break;
            case 'Promotions':
                setFilteredItems(newFilteredItems.sort((a, b) => b.reputation - a.reputation));
                break;
        }
    }

    return (
        <div className={styles.container}>
            <div>
                <SliderWithControls>
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
                                className={`${styles.filterControlsItem} ${sort === 'New' && styles.active}`}
                                onClick={() => handleSort('New')}
                            >
                                New
                            </div>
                            <div
                                className={`${styles.filterControlsItem} ${sort === 'Popular' && styles.active}`}
                                onClick={() => handleSort('Popular')}
                            >
                                Popular
                            </div>
                            <div
                                className={`${styles.filterControlsItem} ${sort === 'Promotions' && styles.active}`}
                                onClick={() => handleSort('Promotions')}
                            >
                                Promotions
                            </div>
                        </div>
                    </div>
                    <div className={styles.casinos}>
                        {
                            filteredItems.map(casino => (
                                <Casino {...casino} key={casino.name} />
                            ))
                        }
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

function Casino({
    claim_bonus_url,
    features,
    games,
    positives,
    rating,
    single_support_language,
    single_website_language,
    url,
    shared_content,
    id
}) {
    return (
        <div className={styles.casino}>
            <Link href={`/casinos/${id}`}>
                <a className={styles.casinoImage}>
                    <Image
                        src="/images/casino.png"
                        layout='fill'
                        objectFit='cover'
                    />
                </a>
            </Link>
            <div className={styles.casinoInfo}>
                <div className={styles.casinoColumn}>
                    <div className={styles.casinoName}>
                        <span className={styles.casinoNameText}>{shared_content.name}</span>
                        <div className={styles.casinoRating}>
                            <Stars points={rating} />
                        </div>
                    </div>
                    <div className={styles.casinoTags}>
                        {
                            features.map(tag => (
                                <div className={styles.casinoTag} key={tag}>
                                    <Image
                                        src="/images/icons/circle-check.svg"
                                        height={24}
                                        width={24}
                                    />
                                    {tag}
                                </div>
                            ))
                        }
                    </div>
                    <span className={styles.subtitle}>
                        Available games
                    </span>
                    <div className={styles.casinoGames}>
                        {
                            games.slice(0, 5).map(game => (
                                <div className={styles.casinoGame} key={game.id} >
                                    <Image
                                        src={`/images/${game.slug}`}
                                        layout='fill'
                                        objectFit='cover'
                                        alt={game.name}
                                    />
                                </div>
                            ))
                        }
                        <div className={styles.casinoGame} >
                            +{games.length - 5}
                        </div>
                    </div>
                </div>
                <div className={`${styles.casinoColumn} ${styles.right}`}>
                    <div className={styles.casinoLanguages}>
                        <div className={styles.languageContainer}>
                            <span className={styles.languageTitle}>Website</span>
                            <div className={styles.languageContent}>
                                <div className={styles.language}>
                                    <Image
                                        src={`/images/icons/${single_website_language.code}`}
                                        alt={single_website_language.name}
                                        height={20}
                                        width={27}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.languageContainer}>
                            <span className={styles.languageTitle}>Live chat</span>
                            <div className={styles.languageContent}>
                                <Image
                                    src={`/images/icons/${single_support_language.code}`}
                                    alt={single_support_language.name}
                                    height={20}
                                    width={27}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.casinoButtons}>
                        <div className={styles.casinoButton}>
                            T&C Apply
                        </div>
                        {claim_bonus_url !== "" && <a
                            href={claim_bonus_url}
                            className={`${styles.casinoButton} ${styles.highlighted}`}
                        >
                            Get Bonus
                        </a>}
                    </div>
                </div>
            </div>
        </div >
    )
}

export async function getStaticProps() {
    const casinos = await APIRequest('/casinos', 'GET')
    const languages = casinos.data
        .map(casino => [casino.single_website_language, casino.single_support_language])
        .flat()
        .reduce((acc, language) => {
            if (acc.find(_language => _language.id === language.id)) {
                return acc
            }
            return [...acc, language]
        }, [])
    const games = casinos.data
        .map(casino => casino.games)
        .flat()
        .reduce((acc, game) => {
            if (acc.find(_game => _game.id === game.id)) {
                return acc
            }
            return [...acc, game]
        }, [])
    const payments = casinos.data
        .map(casino => casino.payment_methods)
        .flat()
        .reduce((acc, payment) => {
            if (acc.find(_payment => _payment.id === payment.id)) {
                return acc
            }
            return [...acc, payment]
        }, [])


    return {
        props: {
            casinos: casinos.data,
            filters: [
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
                {
                    name: 'Payment Methods',
                    items: payments
                }
            ]
        },
        revalidate: 10,
    }
}

CasinosPage.withHeader = true;