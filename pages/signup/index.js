import styles from '../../styles/pages/SignIn.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TextField from '../../components/TextField'
import PasswordField from '../../components/PasswordField'
import useWindowSize from '../../hooks/useWindowSize'
import { useEffect, useRef, useState } from 'react'

export default function SignUp() {
    const {width, height} = useWindowSize()
    const [imgLeft, setImgLeft] = useState()
    const [password, setPassword] = useState()

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
                        You already have an account? <Link href="/signin"><a>Sign In</a></Link>
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
                    <div className={styles.fieldsInRow}>
                        <TextField placeholder="First name" type="text" style={{marginBottom:"24px"}} />
                        <TextField placeholder="Last name" type="text" style={{marginBottom:"24px"}} />
                    </div>
                    <TextField placeholder="Email" type="email" style={{marginBottom:"24px"}} />                    
                    <TextField 
                        placeholder="Date of birth" 
                        type="text" 
                        style={{marginBottom:"24px"}}
                        onFocus={(e)=>{e.target.type="date"}}
                    />
                    <PasswordField placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                    <div className={styles.passwordDescription}>
                        <span className={styles.passwordTitle}>
                            Your password must:
                        </span>
                        <span className={`${styles.checkOption} ${password?.length>=12 && styles.active}`}>
                            Be at least 12 characters
                        </span>
                        <span 
                            className={`
                                ${styles.checkOption} 
                                ${password?.split("")
                                    .filter(letter => (
                                        isNaN(letter * 1)
                                        &&
                                        letter.toLowerCase() != letter.toUpperCase()
                                        && 
                                        letter==letter.toUpperCase()
                                    ))
                                    .length>0 
                                    && 
                                    styles.active
                                }
                            `}
                        >
                            Include at least one uppercase letter
                        </span>
                        <span 
                            className={`
                                ${styles.checkOption} 
                                ${password?.split("")
                                .filter(letter => !isNaN(letter * 1))
                                .length>0
                                &&
                                styles.active}
                            `}
                        >
                            Include at least one number
                        </span>
                        <span 
                            className={`
                                ${styles.checkOption} 
                                ${password?.split("")
                                .filter(letter => (
                                    isNaN(letter * 1)
                                    &&
                                    letter.toLowerCase() == letter.toUpperCase()
                                ))
                                .length>0
                                &&
                                styles.active}
                            `}
                        >
                            Include at least one symbol
                        </span>
                        <label className={styles.checkTerms}>
                            <input type={'checkbox'} />
                            <div className={styles.checkBox} />
                            <span htmlFor='termsCheck' className={styles.checkText}>
                                I confirm that I am over 18 years old and I agree with the <Link href="/signin"><a>Terms and Conditions and Privacy Policy.</a></Link>
                            </span>
                        </label>
                    </div>
                    <div className={styles.buttons}>
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