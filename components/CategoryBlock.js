import styles from '/styles/components/CategoryBlock.module.css'
import Image from 'next/image'

export default function CategoryBlock({name, info, image, bgColor = ""}) {
    return (
        <div className={styles.categoryBlock}>
            <div className={styles.ImgWithRound} style={{background: bgColor}}>
                <Image
                    src={image}
                    objectFit='contain'
                    width={140}
                    height={140}
                />
            </div>
            <div className={styles.categoryInfo}>
                <span className={styles.categoryTitle}>
                    {name}
                </span>
                <span className={styles.categoryDescription}>
                    {info}
                </span>
            </div>
        </div>
    )
}