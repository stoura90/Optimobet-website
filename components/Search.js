import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/components/Search.module.css'
import Dropdown from './Dropdown'
import { motion, AnimatePresence } from 'framer-motion'

export default function Search({ setBorder }) {
    const [open, setOpen] = useState(false)

    const apply = () => {
        setOpen(false)
    }

    const reset = () => {
        setOpen(false)
    }

    const searchText = (e) => {
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
                        sss
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}