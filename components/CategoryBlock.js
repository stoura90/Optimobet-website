import styles from '/styles/components/CategoryBlock.module.css'
import Image from 'next/image'

export default function CategoryBlock() {
    return (
        <div className={styles.categoryBlock}>
            <Image
                src="/placeholder.png"
                objectFit='cover'
                width={180}
                height={180}
            />
            <div className={styles.categoryInfo}>
                <span className={styles.categoryTitle}>
                    CATEGORY
                </span>
                <span className={styles.categoryDescription}>
                    234 items
                </span>
            </div>
        </div>
    )
}