import Image from 'next/image';
import styles from '../../styles/pages/CasinoPage.module.css'

import Stars from '../../components/Stars'

export default function CasinoPage({ casino }) {
    
    return (
        <div className={styles.container}>
            <div className={styles.sideCol}>
                <div className={styles.casinoCard}>
                    <div className={styles.casinoHeaderCard}>
                        <div className={styles.casinoHeaderLogo}>
                            <Image
                                src="/placeholder.png"
                                objectFit='contain'
                                layout='fill'
                            />
                        </div>
                    </div>
                    <div className={styles.casinoContentCard}>
                        <span className={styles.casinoCompany}>
                            JOCSOLUTIONS LIMITED
                        </span>
                        <span className={styles.casinoName}>
                            IVI Casino
                        </span>
                        <div className={styles.stars}>
                            <Stars points={4.1} />
                        </div>
                        <div className={styles.bonuses}>
                            <span>
                                Smaller online casino
                            </span>
                            <span>
                                100% BONUS ON SPORT
                            </span>
                        </div>
                        <div className={styles.buttonBonus}>
                            <button className={styles.getBonus}>
                                Visit website
                            </button>
                            <span className={styles.bonusApply}>
                                T{'&'}C Apply
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.complaint}>
                    Submit a complaint
                </div>
                <div className={styles.advantages}>
                    <span>
                        Casino receives gamblers from numerous countries
                    </span>
                    <span>
                        Support in chat is available 24/7
                    </span>
                </div>
                <div className={styles.disadvantages}>
                    <span>
                        Low monthly withdrawal limit
                    </span>
                    <span>
                        Not all payment methods are available for every currency
                    </span>
                </div>
            </div>
            <div className={styles.mainCol}>
                <div className={styles.infoBlocksWrap}>
                    <div className={styles.infoBlock}>
                        <div className={styles.infoBlockLeft}>
                            <div className={styles.infoIcon}>
                                <Image 
                                    src="/images/icons/casino/current-location.svg"
                                    layout='fill'
                                />
                            </div>
                            <div className={styles.infoText}>
                                <span className={styles.infoTitle}>
                                    IP Address From
                                </span>
                                <span>
                                    Georgia
                                </span>
                            </div>
                        </div>
                        <div className={styles.infoData}>
                            <Image 
                                src="/placeholder.png"
                                width={27}
                                height={20}
                            />
                        </div>
                    </div>
                    <div className={styles.infoBlock}>
                        <div className={styles.infoBlockLeft}>
                            <div className={styles.infoIcon}>
                                <Image 
                                    src="/images/icons/casino/users.svg"
                                    layout='fill'
                                />
                            </div>
                            <div className={styles.infoText}>
                                <span className={styles.infoTitle}>
                                    Support From
                                </span>
                                <span>
                                    United Kingdom
                                </span>
                            </div>
                        </div>
                        <div className={styles.infoData}>
                            <Image 
                                src="/placeholder.png"
                                width={27}
                                height={20}
                            />
                            <Image 
                                src="/placeholder.png"
                                width={27}
                                height={20}
                            />
                        </div>
                    </div>
                    <div className={styles.infoBlock}>
                        <div className={styles.infoBlockLeft}>
                            <div className={styles.infoIcon}>
                                <Image 
                                    src="/images/icons/casino/language.svg"
                                    layout='fill'
                                />
                            </div>
                            <div className={styles.infoText}>
                                <span className={styles.infoTitle}>
                                    Website Language
                                </span>
                                <span>
                                    United Kingdom
                                </span>
                            </div>
                        </div>
                        <div className={styles.infoData}>
                            <Image 
                                src="/placeholder.png"
                                width={27}
                                height={20}
                            />
                            <Image 
                                src="/placeholder.png"
                                width={27}
                                height={20}
                            />
                            <Image 
                                src="/placeholder.png"
                                width={27}
                                height={20}
                            />
                        </div>
                    </div>
                    <div className={styles.infoBlock}>
                        <div className={styles.infoBlockLeft}>
                            <div className={styles.infoIcon}>
                                <Image 
                                    src="/images/icons/casino/messages.svg"
                                    layout='fill'
                                />
                            </div>
                            <div className={styles.infoText}>
                                <span className={styles.infoTitle}>
                                    Live Chat
                                </span>
                                <span>
                                    Georgia
                                </span>
                            </div>
                        </div>
                        <div className={styles.infoData}>
                            <Image 
                                src="/placeholder.png"
                                width={27}
                                height={20}
                            />
                            <Image 
                                src="/placeholder.png"
                                width={27}
                                height={20}
                            />
                        </div>
                    </div>
                    <div className={styles.infoBlock}>
                        <div className={styles.infoBlockLeft}>
                            <div className={styles.infoIcon}>
                                <Image 
                                    src="/images/icons/casino/user.svg"
                                    layout='fill'
                                />
                            </div>
                            <div className={styles.infoText}>
                                <span className={styles.infoTitle}>
                                    Residents From
                                </span>
                                <span>
                                    Georgia
                                </span>
                            </div>
                        </div>
                        <div className={styles.infoData}>
                            <Image 
                                src="/images/icons/circle-check.svg"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                    <div className={styles.infoBlock}>
                        <div className={styles.infoBlockLeft}>
                            <div className={styles.infoIcon}>
                                <Image 
                                    src="/images/icons/casino/shield.svg"
                                    layout='fill'
                                />
                            </div>
                            <div className={styles.infoText}>
                                <span className={styles.infoTitle}>
                                    VPN
                                </span>
                                <span>
                                    United Kingdom
                                </span>
                            </div>
                        </div>
                        <div className={styles.infoData}>
                            <Image 
                                src="/images/icons/circle-x.svg"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                    <div className={styles.infoBlock}>
                        <div className={styles.infoBlockLeft}>
                            <div className={styles.infoIcon}>
                                <Image 
                                    src="/images/icons/casino/license.svg"
                                    layout='fill'
                                />
                            </div>
                            <div className={styles.infoText}>
                                <span className={styles.infoTitle}>
                                    Licensing Authorities
                                </span>
                                <span>
                                    Government of Curacao
                                </span>
                            </div>
                        </div>
                        <div className={styles.infoData}>
                            2018
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

CasinoPage.withHeader = true;

export async function getStaticProps({ params }) {
    const { casino } = params

    return {
        props: {
            casino 
        },
        revalidate: 60,
    }
}

export async function getStaticPaths() {
    const paths = new Array(10).fill(0).map((_, i) => ({ params: { casino: i.toString() } }))

    return { paths, fallback: 'blocking' }
}