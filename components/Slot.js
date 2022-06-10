import Image from 'next/image'
import styles from '../styles/components/Slot.module.css'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useState } from 'react'

export default function Slot({ name, provider, rating, big, id, style }) {
    const [hover, setHover] = useState(false)

    const variants = {
        "top":{
            bottom: "98px"
        },
        "bot":{
            bottom: "30px"
        }
    }

    return (
        <motion.div
            layout
            className={`${styles.slot} ${big && styles.big}`}
            style={style}
            onHoverStart={()=>{
                setHover(true)
            }}
            onHoverEnd={()=>{
                setHover(false)
            }}
        >
            <div className={styles.pictureArea}>
                <Image
                    src={'/images/egypt.jpg'}
                    alt={name}
                    layout={'fill'}
                    objectFit={'cover'}
                />
            </div>
            <motion.div 
                className={styles.slotInfo}
                animate={hover ? "top" : "bot"}
                variants={variants}
                transition={{duration:0.2, ease:"easeInOut"}}
            >
                <span className={styles.slotName}>{name}</span>
                <span className={styles.slotProvider}>{provider}</span>
            </motion.div>            
            <AnimatePresence>
                {hover && !big && 
                    <motion.div 
                        className={styles.slotButtonCenter}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{duration:0.2, ease:"easeInOut"}}
                    >
                        Play Now
                    </motion.div>
                }
            </AnimatePresence>  
            <div className={styles.slotRating}>
                {rating}
            </div>
            {
                big &&
                <div className={styles.slotButton}>
                    Play Now
                </div>
            }          
        </motion.div>
    )
}