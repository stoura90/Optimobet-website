import Image from 'next/image';
import React, { useState } from 'react'
import { SwiperSlide } from 'swiper/react';
import SliderWithControls from '../../components/SliderWithControls';
import styles from '../../styles/pages/Bonuses.module.css'
import { AnimatePresence, motion } from 'framer-motion';
import CheckboxFilter from '../../components/filters/CheckboxFilter';
import Stars from '../../components/Stars';
import { ReactSVG } from 'react-svg';

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

export default function BonusesPage() {
    const [sidebarShown, setSidebarShown] = useState(true);
    const [filter, setFilter] = useState('All');

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
                    <div className={styles.casinos}>
                        {
                            casinos.map(casino => (
                                <Casino {...casino} key={casino.name} />
                            ))
                        }
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

function Casino({ name, rating, tags, games }) {
    return (
        <div className={styles.casino}>
            <div className={styles.casinoImage}>
                <Image
                    src="/images/casino.png"
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={styles.casinoInfo}>
                <div className={styles.casinoColumn}>

                    <div className={styles.casinoName}>
                        <span className={styles.casinoNameText}>{name}</span>
                        <div className={styles.casinoRating}>
                            <Stars points={rating} />
                        </div>
                    </div>
                    <div className={styles.casinoTags}>
                        {
                            tags.map(tag => (
                                <div className={styles.casinoTag} key={tag}>
                                    <Image
                                        src="/images/icons/circle-check.svg"
                                        height={12}
                                        width={12}
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
                            games.map(game => (
                                <div className={styles.casinoGame} key={game} >
                                    <Image
                                        src="/images/game.png"
                                        layout='fill'
                                        objectFit='cover'
                                        alt={game}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={`${styles.casinoColumn} ${styles.right}`}>
                    <div className={styles.casinoLanguages}>
                        <div className={styles.languageContainer}>
                            <span className={styles.languageTitle}>Website</span>
                            <div className={styles.languageContent}>
                                {
                                    [1, 2, 3].map(item => (
                                        <div className={styles.language} key={item}>
                                            <Image
                                                src="/images/icons/flag-en.svg"
                                                height={20}
                                                width={27}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.languageContainer}>
                            <span className={styles.languageTitle}>Live chat</span>
                            <div className={styles.languageContent}>
                                {
                                    [1, 2, 3].map(item => (
                                        <div className={styles.language} key={item}>
                                            <Image
                                                src="/images/icons/flag-en.svg"
                                                height={20}
                                                width={27}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.casinoButtons}>
                        <div className={styles.casinoButton}>
                            T&C Apply
                        </div>
                        <div className={`${styles.casinoButton} ${styles.highlighted}`}>
                            Get Bonus
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

BonusesPage.withHeader = true;
BonusesPage.withFooter = true;