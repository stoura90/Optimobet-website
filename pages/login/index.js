import styles from '../../styles/pages/SignIn.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TextField from '../../components/TextField'
import PasswordField from '../../components/PasswordField'
import useWindowSize from '../../hooks/useWindowSize'
import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Login() {
    const { width, height } = useWindowSize()
    const [imgLeft, setImgLeft] = useState()

    const [currentPage,setCurrentPage] = useState()

    useEffect(()=>{ 
        setCurrentPage(<SignIn setCurrentPage={setCurrentPage} />)
    },[])

    useEffect(() => {
        if ((0.4 * width - 520) > 0)
            setImgLeft(null)
        else
            setImgLeft(520)
    }, [width])

    return (
        <div className={styles.container}>
            <AnimatePresence>
                {currentPage}
            </AnimatePresence>
            <div className={styles.picture}>
                <div className={styles.landscape}>
                    <Image
                        src="/images/signin/Base_Landscape.png"
                        objectFit='cover'
                        layout='fill'
                    />
                </div>
                <div className={styles.characters} style={imgLeft ? { left: imgLeft + "px" } : {}}>
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

function SignIn({setCurrentPage}) {
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}} 
            transition={{ease:"easeInOut"}}
            className={styles.formArea}
        >
            <form className={styles.authForm}>
                <span className={styles.formTitle}>
                    Sign In
                </span>
                <span className={styles.formText}>
                    Don't have an account? <a onClick={()=>{setCurrentPage(<SignUp setCurrentPage={setCurrentPage} />)}}>Create one</a>
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
                <TextField placeholder="Email" type="email" style={{ marginBottom: "24px" }} />
                <PasswordField placeholder="Password" />
                <div className={styles.buttons}>
                    <span className={styles.formText}>
                        <a  onClick={()=>{setCurrentPage(<Recovery setCurrentPage={setCurrentPage} />)}}>Forgot Password?</a>
                    </span>
                    <button type='submit' className={styles.submit}>
                        Sign In
                    </button>
                </div>
            </form>
        </motion.div>
    )
}

function SignUp({setCurrentPage}) {
    const [password, setPassword] = useState()

    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}} 
            transition={{ease:"easeInOut"}}
            className={styles.formArea}
        >
            <form className={styles.authForm}>
                <span className={styles.formTitle}>
                    Sign In
                </span>
                <span className={styles.formText}>
                    You already have an account? <a onClick={()=>{setCurrentPage(<SignIn setCurrentPage={setCurrentPage} />)}}>Sign In</a>
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
                    <TextField placeholder="First name" type="text" style={{ marginBottom: "24px" }} />
                    <TextField placeholder="Last name" type="text" style={{ marginBottom: "24px" }} />
                </div>
                <TextField placeholder="Email" type="email" style={{ marginBottom: "24px" }} />
                <TextField
                    placeholder="Date of birth"
                    type="text"
                    style={{ marginBottom: "24px" }}
                    onFocus={(e) => { e.target.type = "date" }}
                />
                <PasswordField placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <div className={styles.passwordDescription}>
                    <span className={styles.passwordTitle}>
                        Your password must:
                    </span>
                    <span className={`${styles.checkOption} ${password?.length >= 12 && styles.active}`}>
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
                                    letter == letter.toUpperCase()
                                ))
                                .length > 0
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
                                .length > 0
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
                                .length > 0
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
                            I confirm that I am over 18 years old and I agree with the <Link href="/login"><a>Terms and Conditions and Privacy Policy.</a></Link>
                        </span>
                    </label>
                </div>
                <div className={styles.buttons}>
                    <button type='submit' className={styles.submit}>
                        Sign In
                    </button>
                </div>
            </form>
        </motion.div>
    )
}

function Recovery({setCurrentPage}) {
    const submitRef = useRef()

    return (
        <div
            className={styles.formArea} 
            style={{ flexDirection: "column" }}
        >
            <div className={styles.goLogin}>
                <a className={styles.loginLink} onClick={()=>{setCurrentPage(<SignIn setCurrentPage={setCurrentPage} />)}}>
                    <Image
                        src="/images/icons/left-arrow-downloaded.svg"
                        width={18}
                        height={18}
                    />
                    Back to Login
                </a>
            </div>
            <form className={styles.authForm}>
                <motion.span
                    initial={{opacity:0, translateY:-100}}
                    animate={{opacity:1, translateY:0}}
                    exit={{opacity:0,translateY:-100}} 
                    transition={{ease:"easeInOut"}}
                    className={styles.formTitle}
                >
                    Forgot your password?
                </motion.span>
                <motion.span                    
                    initial={{opacity:0,translateY:-100}}
                    animate={{opacity:1,translateY:0}}
                    exit={{opacity:0,translateY:-100}} 
                    transition={{ease:"easeInOut"}}
                    className={styles.formDescription}
                >
                    Happens to all of us, but we’ll help you reset your password. Enter the email associated with your account, we’ll send you a link to reset password.
                </motion.span>
                <TextField
                    required
                    placeholder="Email"
                    type="email"
                    onChange={(e) => {
                        if (e.target.validity.valid)
                            submitRef.current.disabled = false
                        else
                            submitRef.current.disabled = true
                    }}
                />
                <div className={styles.buttons}>
                    <motion.button
                        initial={{background:"#7F3FFC", width:111, translateY:71}}
                        animate={{background:"#4B445380", width:196, translateY:0}}
                        exit={{background:"#7F3FFC", width:111, translateY:71}}
                        transition={{ease:"easeInOut"}}
                        type='submit'
                        className={styles.submit}
                        style={{ marginLeft: 'auto', maxHeight:48, overflow:"hidden", whiteSpace:"nowrap" }}
                        disabled
                        ref={submitRef}
                    >
                        Reset my password
                    </motion.button>
                </div>
            </form>
        </div>
    )
}