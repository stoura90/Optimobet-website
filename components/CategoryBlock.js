import styles from '/styles/components/CategoryBlock.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function CategoryBlock({ name, info, image, bgColor = "", href = "/" }) {
    return (
        <Link href={href}>
            <a className={styles.categoryBlock}>
                <div className={styles.ImgWithRound} style={{ background: bgColor }}>
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
            </a>
        </Link>
    )
}