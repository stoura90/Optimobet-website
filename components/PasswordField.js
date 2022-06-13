import { useState } from 'react'
import styles from '../styles/components/PasswordField.module.css'

export default function PasswordField({...props}) {
    const [typeF, setTypeF] = useState("password")

    return (
        <input className={styles.input} {...props} type={typeF} />
    )
}