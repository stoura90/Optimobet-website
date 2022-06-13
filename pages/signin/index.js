import styles from '../../styles/pages/SignIn.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TextField from '../../components/TextField'
import PasswordField from '../../components/PasswordField'

export default function SignIn() {
    return (
        <div className={styles.container}>
            <div className={styles.formArea}>
                <form className={styles.authForm}>
                    <span className={styles.formTitle}>
                        Sign In
                    </span>
                    <span className={styles.formText}>
                        Don't have an account? <Link href="/signup"><a>Create one</a></Link>
                    </span>
                    <div className={styles.socials}>
                        <div className={styles.social}>
                            <Image
                                src="/placeholder.png"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className={styles.social}>
                            <Image
                                src="/placeholder.png"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className={styles.social}>
                            <Image
                                src="/placeholder.png"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className={styles.social}>
                            <Image
                                src="/placeholder.png"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                    <div className={styles.separatorOr}>Or</div>
                    <TextField placeholder="Email" style={{marginBottom:"24px"}} />
                    <PasswordField placeholder="Password" />
                </form>
            </div>
            <div className={styles.picture}>
                <div className={styles.landscape}>
                    <Image
                        src="/images/signin/Base_Landscape.png"
                        objectFit='cover'
                        layout='fill'
                    />
                </div>
                <div className={styles.characters}>
                    <Image
                        src="/images/signin/2 – 4.png"
                        objectFit='contain'
                        layout='fill'
                    />
                </div>
            </div>
        </div>
    )
}