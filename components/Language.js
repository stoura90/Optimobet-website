import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/components/Language.module.css'
import Dropdown from './Dropdown'
import { motion, AnimatePresence } from 'framer-motion'

export default function Language({ setBorder }) {
    const [open, setOpen] = useState(false)

    const apply = () => {
        setOpen(false)
    }

    const reset = () => {
        setOpen(false)
    }

    useEffect(()=>{
        if (setBorder) {
            setBorder(open)
        }
    },[open])

    return (
        <div className={styles.container}>
            <div 
                className={styles.language}
                onClick={()=>setOpen(!open)}
                style={open ? {borderColor:"#7F3FFC"} : {}}
            >
                <span>EN</span> 
                <span className={styles.separator} />
                <Image 
                    src="/placeholder.png" 
                    width={27} 
                    height={20} 
                />
            </div>
            <AnimatePresence>
                {open &&
                    <motion.div 
                        className={styles.languageSelector}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{duration:0.2}}
                    >
                        <span className={styles.languageHeader}>
                            Choose Language
                        </span>
                        <Dropdown description={"Language"} />                
                        <Dropdown description={"Your Country"} />
                        <div className={styles.applyOrReset}>
                            <div 
                                className={styles.buttonApply}
                                onClick={apply}
                            >
                                Apply Settings
                            </div>
                            <div 
                                className={styles.buttonReset}
                                onClick={reset}
                            >
                                Reset
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>            
        </div>
    )
}