import styles from '../styles/components/TextField.module.css'

export default function TextField({...props}) {
    return (
        <input className={styles.input} {...props} />
    )
}