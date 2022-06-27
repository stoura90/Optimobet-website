import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/components/Search.module.css'
import Dropdown from './Dropdown'
import { motion, AnimatePresence } from 'framer-motion'
import Stars from '../components/Stars'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Search({ setBorder }) {
    const [open, setOpen] = useState(false)
    const [filter, setFilter] = useState('All')
    const [searchValue, setSearchValue] = useState()
    const searchRef = useRef()
    const router = useRouter()

    useEffect(()=>{
        searchRef.current.value = ""
        setSearchValue(null)
        setOpen(false)
    },[router.asPath])

    const apply = () => {
        setOpen(false)
    }

    const reset = () => {
        setOpen(false)
    }

    const searchText = (e) => {
        setSearchValue(e.target.value)
        if (e.target.value.length>0) 
            setOpen(true)
        else
            setOpen(false)
    }

    useEffect(()=>{
        if (setBorder) {
            setBorder(open)
        }
    },[open])

    return (
        <div className={styles.search}>
            <input
                type="text"
                placeholder="Search"
                onChange={searchText}
                ref={searchRef}
            />
            <div className={styles.icon}>
                <Image
                    src="/images/icons/search.svg"
                    width={24}
                    height={24}
                />
            </div>
            <AnimatePresence>
                {open &&
                    <motion.div 
                        className={styles.searchResults}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{duration:0.2}}
                    >
                        <div className={styles.searchCategories}>
                            <div className={`${styles.searchFilter} ${filter === 'All' && styles.active}`}
                                onClick={() => setFilter('All')}
                            >
                                All
                            </div>
                            <div className={`${styles.searchFilter} ${filter === 'Online Casinos' && styles.active}`}
                                onClick={() => setFilter('Online Casinos')}
                            >
                                Online Casinos
                            </div>
                            <div className={`${styles.searchFilter} ${filter === 'Free slots' && styles.active}`}
                                onClick={() => setFilter('Free slots')}
                            >
                                Free slots
                            </div>
                        </div>
                        <div className={styles.resultList}>
                            <div className={styles.resultCategory}>
                                <span className={styles.categoryTitle}>
                                    ONLINE CASINO
                                </span>
                                <span className={styles.categoryCount}>
                                    245
                                </span>
                            </div>
                            <div className={styles.resultContent}>
                                <div className={styles.resultInfo}>
                                    <div className={styles.resultLogo}>
                                        <Image
                                            src="/placeholder.png"
                                            width={80}
                                            height={20}
                                        />
                                    </div>
                                    <div className={styles.resultData}>
                                        <span className={styles.resultName}>
                                            Result name
                                        </span>
                                        <div className={styles.stars}>
                                            <Stars points={4.4} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.resultInfo}>
                                    <div className={styles.resultLogo}>
                                        <Image
                                            src="/placeholder.png"
                                            width={80}
                                            height={20}
                                        />
                                    </div>
                                    <div className={styles.resultData}>
                                        <span className={styles.resultName}>
                                            Result name
                                        </span>
                                        <div className={styles.stars}>
                                            <Stars points={4.4} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.resultInfo}>
                                    <div className={styles.resultLogo}>
                                        <Image
                                            src="/placeholder.png"
                                            width={80}
                                            height={20}
                                        />
                                    </div>
                                    <div className={styles.resultData}>
                                        <span className={styles.resultName}>
                                            Result name
                                        </span>
                                        <div className={styles.stars}>
                                            <Stars points={4.4} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.resultCategory}>
                                <span className={styles.categoryTitle}>
                                    Slots
                                </span>
                                <span className={styles.categoryCount}>
                                    245
                                </span>
                            </div>
                            <div className={styles.resultContent}>
                                <div className={styles.resultInfo}>
                                    <div className={styles.resultLogo}>
                                        <Image
                                            src="/placeholder.png"
                                            width={80}
                                            height={20}
                                        />
                                    </div>
                                    <div className={styles.resultData}>
                                        <span className={styles.resultName}>
                                            Result name
                                        </span>
                                        <div className={styles.stars}>
                                            <Stars points={4.4} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.resultInfo}>
                                    <div className={styles.resultLogo}>
                                        <Image
                                            src="/placeholder.png"
                                            width={80}
                                            height={20}
                                        />
                                    </div>
                                    <div className={styles.resultData}>
                                        <span className={styles.resultName}>
                                            Result name
                                        </span>
                                        <div className={styles.stars}>
                                            <Stars points={4.4} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.resultInfo}>
                                    <div className={styles.resultLogo}>
                                        <Image
                                            src="/placeholder.png"
                                            width={80}
                                            height={20}
                                        />
                                    </div>
                                    <div className={styles.resultData}>
                                        <span className={styles.resultName}>
                                            Result name
                                        </span>
                                        <div className={styles.stars}>
                                            <Stars points={4.4} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href={`/searchresults?text=${searchValue}`}>
                            <a className={styles.seeAllResults}>
                                See All Results
                            </a>
                        </Link>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}