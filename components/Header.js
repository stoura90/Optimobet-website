import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import styles from '../styles/components/Header.module.css'
import Language from '../components/Language'
import Search from '../components/Search'
import useUserInfo from '../hooks/useUserInfo'
import { AnimatePresence, motion } from 'framer-motion'

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
    const [bordered, setBordered] = useState(false)
    const user = useUserInfo();

    return (
        <header className={`${styles.container} ${bordered && styles.bordered}`}>
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
            <Search setBorder={setBordered} />
            <Language setBorder={setBordered} />
            {
                !user
                    ? <Link href="/login">
                        <a className={styles.login}>
                            Sign In
                        </a>
                    </Link>
                    : <UserMenu user={user} setBorder={setBordered} />
            }
        </header>
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

function UserMenu({ user, setBorder }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    function handleLogout() {
        localStorage.removeItem('user');
        router.reload()
    }

    function toggleOpen() {
        setIsOpen(!isOpen);
        setBorder(!isOpen);
    }

    return (
        <div className={styles.user}>
            <div
                onClick={toggleOpen}
                className={styles.userAvatar}
            >
                {user.name.slice(0, 1).toUpperCase()}{user.surname.slice(0, 1).toUpperCase()}
            </div>
            <AnimatePresence initial={false}>
                {
                    isOpen && (
                        <motion.div
                            animate={{ opacity: [0, 1] }}
                            exit={{ opacity: [1, 0] }}
                            transition={{ duration: 0.3 }}
                            className={styles.userMenu}
                        >
                            <span className={styles.userName}>
                                {user.name} {user.surname}
                            </span>
                            <Link href={'/favorite-games'}>
                                <a className={styles.userMenuItem}>
                                    <div>
                                        <Image
                                            src={'/images/icons/play-card.svg'}
                                            alt="play-card"
                                            width={24}
                                            height={24}
                                        />
                                        <span>
                                            Favorite games
                                        </span>
                                    </div>
                                    <span className={styles.userMenuCounter}>
                                        {user.favoriteGamesCount ?? 0}
                                    </span>
                                </a>
                            </Link>
                            <Link href={'/my-complaints'}>
                                <a className={styles.userMenuItem}>
                                    <div>
                                        <Image
                                            src={'/images/icons/message-report.svg'}
                                            alt="message-report"
                                            width={24}
                                            height={24}
                                        />
                                        <span>
                                            My complaints
                                        </span>
                                    </div>
                                    <span className={styles.userMenuCounter}>
                                        {user.complaintsCount ?? 0}
                                    </span>
                                </a>
                            </Link>
                            <div className={styles.divider} />
                            <span className={styles.userMenuItem}>
                                <div>

                                    <Image
                                        src={'/images/icons/user-circle.svg'}
                                        alt="user circle"
                                        width={24}
                                        height={24}
                                    />
                                    <span>
                                        Edit Information
                                    </span>
                                </div>
                            </span>
                            <span className={styles.userMenuItem}>
                                <div>
                                    <Image
                                        src={'/images/icons/lock.svg'}
                                        alt="lock"
                                        width={24}
                                        height={24}
                                    />
                                    <span>
                                        Change Password
                                    </span>
                                </div>
                            </span>
                            <span
                                onClick={handleLogout}
                                className={styles.userMenuItem}
                            >
                                <div>
                                    <Image
                                        src={'/images/icons/logout.svg'}
                                        alt="logout"
                                        width={24}
                                        height={24}
                                    />
                                    <span>
                                        Log Out
                                    </span>
                                </div>
                            </span>
                        </motion.div>
                    )
                }
            </AnimatePresence>

        </div>
    )
}