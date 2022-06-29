import styles from '../styles/components/TextField.module.css'

export default function TextField({ label, ...props }) {
    return (
        <div className={styles.wrap}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                style={label ? { paddingTop: '24px' } : {}}
                className={styles.input}
                {...props}
            />
        </div>
    )
}