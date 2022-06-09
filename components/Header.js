import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import styles from '../styles/components/Header.module.css'

const links = [
    {
        href: '/casinos',
        name: 'Online Casinos'
    },
    {
        href: '/bonuses',
        name: 'Bonuses'
    },
    {
        href: '/bookmakers',
        name: 'Bookmakers'
    },
    {
        href: '/slots',
        name: 'Gambling'
    },
    {
        href: '/complaints',
        name: 'Complaints'
    },
    {
        href: '/blog',
        name: 'Blog'
    },
]

export default function Header() {
    return (
        <div className={styles.container}>
            <Link href={'/'}>
                <a className={styles.logo}>
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={153}
                        height={36}
                    />
                </a>
            </Link>
            <nav className={styles.navigation}>
                {
                    links.map(link => (
                        <MenuLink key={link.name} {...link} />
                    ))
                }
            </nav>
            <input
                type="text"
                placeholder="Search"
                className={styles.search}
            />
            <div className={styles.language}>
                Eng | O
            </div>
            <Link href="/login">
                <a className={styles.login}>
                    Sign In
                </a>
            </Link>
        </div>
    )
}

function MenuLink({ href, name }) {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const _isActive = router.pathname.split('/').includes(href.split('/')[1]);
        setIsActive(_isActive);
    }, [router.pathname])

    return (
        <Link href={href}>
            <a className={`${styles.link} ${isActive && styles.active}`}>
                {name}
            </a>
        </Link>
    )
}