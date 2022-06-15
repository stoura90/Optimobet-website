import styles from '../../styles/pages/SignIn.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TextField from '../../components/TextField'
import PasswordField from '../../components/PasswordField'
import useWindowSize from '../../hooks/useWindowSize'
import { useEffect, useRef, useState } from 'react'

export default function Revocery() {
    const {width, height} = useWindowSize()
    const [imgLeft, setImgLeft] = useState()
    const [password, setPassword] = useState()

    const submitRef = useRef()

    useEffect(()=>{
        if ((0.4*width - 520)>0)
            setImgLeft(null)
        else
            setImgLeft(520)
    },[width])

    return (
        <div className={styles.container}>
            <div className={styles.formArea}>
                <div className={styles.goLogin}>
                    <Link href={"/signin"}>
                        <a className={styles.loginLink}>
                            <Image
                                src="/images/icons/left-arrow-downloaded.svg"
                                width={18}
                                height={18}
                            />
                            Back to Login
                        </a>
                    </Link>
                </div>
                <form className={styles.authForm}>
                    <span className={styles.formTitle}>
                        Forgot your password?
                    </span>
                    <span className={styles.formDescription}>
                        Happens to all of us, but we’ll help you reset your password. Enter the email associated with your account, we’ll send you a link to reset password.
                    </span>
                    <TextField 
                        required 
                        placeholder="Email" 
                        type="email" 
                        onChange={(e)=>{
                            if (e.target.validity.valid)
                                submitRef.current.disabled=false
                            else
                                submitRef.current.disabled=true
                        }} 
                    />
                    <div className={styles.buttons}>
                        <button 
                            type='submit' 
                            className={styles.submit} 
                            style={{marginLeft:'auto'}} 
                            disabled
                            ref={submitRef}
                        >
                            Reset my password
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