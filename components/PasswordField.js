import { useState } from 'react'
import styles from '../styles/components/PasswordField.module.css'
import Image from 'next/image'

export default function PasswordField({...props}) {
    const [typeF, setTypeF] = useState(true)

    return (
        <div className={styles.container}>
            <input 
                className={styles.input} 
                {...props} 
                type={typeF ? "password" : "text"} 
            />
            <div 
                className={styles.eye}
                onClick={()=>{
                    setTypeF(!typeF)
                }}
            >
                <Image
                    src={typeF ? "/images/icons/eye-off.svg" : "/images/icons/eye.svg"}
                    width={24}
                    height={24}
                />
            </div>            
        </div>
    )
}