import React, { useState } from 'react'
import styles from '../styles/components/CheckboxFilter.module.css'

export default function CheckboxFilter({ items }) {
    const [active, setActive] = useState(items[0].id)

    return (
        <div className={styles.filter}>
            {items.map(item => (
                <div
                    key={`type_${item.id}`}
                    className={`${styles.type} ${active === item.id && styles.active}`}
                    onClick={() => item.id !== active && setActive(item.id)}
                >
                    <div className={styles.typeName}>{item.name}</div>
                    <div className={styles.typeCheckbox} />
                </div>
            ))}
        </div>
    )
}