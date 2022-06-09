import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/components/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.column}>
                <span className={styles.colTitle}>
                    PLAY
                </span>                
                <Link href={'#'}>
                    <a>
                        Free Slots  
                    </a>
                </Link>
            </div>            
            <div className={styles.column}>
                <span className={styles.colTitle}>
                    ABOUT US
                </span>                
                <Link href={'#'}>
                    <a>
                        Who we are 
                    </a>
                </Link>
            </div>
        </footer>
    )
}