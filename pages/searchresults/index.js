import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import styles from '../../styles/pages/SearchResults.module.css'
import { AnimatePresence, motion } from 'framer-motion';
import CheckboxFilter from '../../components/filters/CheckboxFilter';
import Stars from '../../components/Stars';
import { ReactSVG } from 'react-svg';
import { useRouter } from 'next/router'
import Slot from '../../components/Slot'

const filters = [
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

export default function SearchResults() {
    const [sidebarShown, setSidebarShown] = useState(true);
    const [filter, setFilter] = useState('All');
    const router = useRouter()
    const [selectedCat, setSelectedCat] = useState(0)

    const selectCategoryForFilters = (category) => {
        setSelectedCat(category)
    }

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

    const filterVariants = {
        open: {
            opacity: 1,
        },
        closed: {
            opacity: 0,
        }
    }

    const resultCasinosVariants = {
        title: {
            marginTop: "72px"
        },
        controls: {
            marginTop: "62px"
        }
    }

    function renderSlots(sidebarShown) {
        // breaks the layout when first slot is big
        let column = 1;
        let row = 1;
        const maxColumns = sidebarShown ? 3 : 4;
        return _slots.map((item, index) => {
            const slot = <Slot
                {...item}
                key={`slot_${item.id}`}
                // big={index === 0}
                style={{
                    gridColumnStart: column,
                    gridColumnEnd: column + 1,
                    gridRowStart: row,
                    gridRowEnd: row + 1,
                }}
            />
            // if (index === 0) {
            //     column = 3;
            //     return slot;
            // }
            column < maxColumns ? column++ : (column = 1, row++)
            return slot
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchHeader}>
                <h1>
                    Search Results for: "<span>{router.query.text}</span>"
                </h1>
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
                        <div className={styles.sticky}>
                            <div className={styles.filterHeader}>
                                FILTER
                            </div>
                            <CategoryFilter
                                currentCategory={selectedCat}
                                selectCategory={selectCategoryForFilters}
                            />
                            <motion.div
                                initial={'closed'}
                                variants={filterVariants}
                                animate={selectedCat > 0 ? 'open' : 'closed'}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className={styles.filterContainer}
                            >
                                {filters.map((filter, index) => (
                                    <CheckboxFilter
                                        key={filter.name}
                                        title={filter.name}
                                        items={filter.items}
                                        initialOpen={false}
                                        collapsible
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>}
                </AnimatePresence>
                <motion.div
                    variants={contentVariants}
                    animate={sidebarShown ? 'narrow' : 'wide'}
                    className={styles.content}
                >
                    <AnimatePresence initial={false}>
                        {(selectedCat == 1 || selectedCat == 0) &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div style={{ position: "relative" }}>
                                    <AnimatePresence initial={false}>
                                        {selectedCat == 0 &&
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className={styles.categoryHeaderResults}
                                                style={{ position: "absolute" }}
                                            >
                                                <span className={styles.secondName}>
                                                    Second name
                                                </span>
                                                <span className={styles.mainName}>
                                                    Main name
                                                </span>
                                            </motion.div>
                                        }
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {selectedCat != 0 &&
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className={styles.controls}
                                                style={{ position: "absolute", width: "100%" }}
                                            >
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
                                            </motion.div>
                                        }
                                    </AnimatePresence>
                                </div>
                                <motion.div
                                    variants={resultCasinosVariants}
                                    initial={"title"}
                                    animate={selectedCat == 0 ? "title" : "controls"}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className={styles.casinos}
                                >
                                    {
                                        casinos.map(casino => (
                                            <Casino {...casino} key={casino.name} />
                                        ))
                                    }
                                </motion.div>
                            </motion.div>
                        }
                        {(selectedCat == 2 || selectedCat == 0) &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div style={{ position: "relative" }}>
                                    <AnimatePresence initial={false}>
                                        {selectedCat == 0 &&
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className={styles.categoryHeaderResults}
                                                style={{ position: "absolute" }}
                                            >
                                                <span className={styles.secondName}>
                                                    Second name
                                                </span>
                                                <span className={styles.mainName}>
                                                    Main name
                                                </span>
                                            </motion.div>
                                        }
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {selectedCat != 0 &&
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className={styles.controls}
                                                style={{ position: "absolute", width: "100%" }}
                                            >
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
                                            </motion.div>
                                        }
                                    </AnimatePresence>
                                </div>
                                <motion.div
                                    variants={resultCasinosVariants}
                                    initial={"title"}
                                    animate={selectedCat == 0 ? "title" : "controls"}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    style={!sidebarShown ? { gridTemplateColumns: "repeat(4, 1fr)" } : {}}
                                    className={styles.slots}
                                >
                                    {renderSlots(sidebarShown)}
                                </motion.div>
                            </motion.div>
                        }
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    )
}

function CategoryFilter({
    categories = [
        {
            name: "All",
            count: 15
        },
        {
            name: "Online Casino",
            count: 15
        },
        {
            name: "Free Slots",
            count: 15
        },
    ],
    selectCategory,
    currentCategory = 0
}) {
    const [selectedCat, setSelectedCat] = useState(currentCategory)

    useEffect(() => {
        selectCategory && selectCategory(selectedCat)
    }, [selectedCat])

    return (
        <div className={styles.categoriesFilter}>
            <span className={styles.categoriesTitle}>
                Category
            </span>
            <div className={styles.categoriesList}>
                {categories && categories.length > 0 && categories.map((cat, index) => (
                    <div
                        className={`${styles.category} ${index == selectedCat && styles.activeCategory}`}
                        key={index}
                        onClick={() => setSelectedCat(index)}
                    >
                        <span>
                            {cat.name}
                        </span>
                        <span className={styles.categoryCount}>
                            {cat.count}
                        </span>
                    </div>
                ))}
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

SearchResults.withHeader = true;
SearchResults.withFooter = true;