import Image from 'next/image'
import styles from '../styles/components/Slot.module.css'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'

export default function Slot({ name, provider, rating, big, id, style }) {
    return (
        <motion.div
            layout
            className={`${styles.slot} ${big && styles.big}`}
            style={style}
        >
            <Image
                src={'/images/egypt.jpg'}
                alt={name}
                layout={'fill'}
                objectFit={'cover'}
            />
            <div className={styles.slotInfo}>
                <span className={styles.slotName}>{name}</span>
                <span className={styles.slotProvider}>{provider}</span>
            </div>
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