import React, { useState } from 'react'
import styles from '../styles/components/CountFilter.module.css'

export default function CountFilter({ items }) {
    const [active, setActive] = useState(items[0].id)

    return (
        <div className={styles.filter}>
            {items.map(item => (
                <div
                    key={`provider_${item.id}`}
                    className={`${styles.provider} ${active === item.id && styles.active}`}
                    onClick={() => item.id !== active && setActive(item.id)}
                >
                    <div className={styles.providerName}>{item.name}</div>
                    <div className={styles.providerCount}>{item.count}</div>
                </div>
            ))}
        </div>
    )
}