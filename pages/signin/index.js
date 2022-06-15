import styles from '../../styles/pages/SignIn.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TextField from '../../components/TextField'
import PasswordField from '../../components/PasswordField'
import useWindowSize from '../../hooks/useWindowSize'
import { useEffect, useState } from 'react'

export default function SignIn() {
    const {width, height} = useWindowSize()
    const [imgLeft, setImgLeft] = useState()

    useEffect(()=>{
        if ((0.4*width - 520)>0)
            setImgLeft(null)
        else
            setImgLeft(520)
    },[width])

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
                    <TextField placeholder="Email" type="email" style={{marginBottom:"24px"}} />
                    <PasswordField placeholder="Password" />
                    <div className={styles.buttons}>
                        <span className={styles.formText}>
                            <Link href="/recovery"><a>Forgot Password?</a></Link>
                        </span>
                        <button type='submit' className={styles.submit}>
                            Sign In
                        </button>
                    </div>
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
                <div className={styles.characters} style={imgLeft ? {left:imgLeft+"px"} : {}}>
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