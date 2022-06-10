import Image from 'next/image';
import styles from '../../styles/pages/CasinoPage.module.css'

import Stars from '../../components/Stars'
import InfoBlock from '../../components/casino/InfoBlock'
import BonusBlock from '../../components/casino/BonusBlock'

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
                    <InfoBlock 
                        iconSrc="/images/icons/casino/current-location.svg"
                        infoTitle="IP Address From"
                        infoText="Georgia"
                        dataImages={["/placeholder.png"]}
                    />
                    <InfoBlock 
                        iconSrc="/images/icons/casino/users.svg"
                        infoTitle="Support From"
                        infoText="United Kingdom"
                        dataImages={["/placeholder.png","/placeholder.png"]}
                    />
                    <InfoBlock 
                        iconSrc="/images/icons/casino/language.svg"
                        infoTitle="Website Language"
                        infoText="United Kingdom"
                        dataImages={["/placeholder.png","/placeholder.png","/placeholder.png"]}
                    />
                    <InfoBlock 
                        iconSrc="/images/icons/casino/messages.svg"
                        infoTitle="Live Chat"
                        infoText="Georgia"
                        dataImages={["/placeholder.png","/placeholder.png"]}
                    />
                    <InfoBlock 
                        iconSrc="/images/icons/casino/user.svg"
                        infoTitle="Residents From"
                        infoText="Georgia"
                        dataImages={["/images/icons/circle-check.svg"]}
                    />
                    <InfoBlock 
                        iconSrc="/images/icons/casino/shield.svg"
                        infoTitle="VPN"
                        infoText="United Kingdom"
                        dataImages={["/images/icons/circle-x.svg"]}
                    />
                    <InfoBlock 
                        iconSrc="/images/icons/casino/license.svg"
                        infoTitle="Licensing Authorities"
                        infoText="Government of Curacao"
                        dataText="2018"
                    />
                </div>
                <div className={styles.casinoText}>
                    <div className={styles.casinoTextBlock}>
                        <span className={styles.blockTitle}>
                            About casino
                        </span>
                        <span>
                            Parimatch offers 22 legal sport betting, cybersport and entertainment. As for covered countries, football coverage is decent, with match odds from 34 countries around the world, except international competitions. English game moves to the Premier-League Rayman - 7th level Even bookmaker’s office Parimatch is well known to the players, who are not particularly keen on counting sporting events, this kind of casino brand is not popular. But the advantages of this casino make you believe that the visiting will increase. Casino Parimatch offers excellent games, multilingual interface and qualified support team, all the most convenient payment methods and etc.
                        </span>
                    </div>
                    <div className={styles.casinoTextBlock}>
                        <span className={styles.blockTitle}>
                            Verdict
                        </span>
                        <span>
                            We have thoroughly checked Casino Parimatch and assessed a good reputation. It’s a great casino, yet there are some things to be paid attention to. In our review we looked at the casino players’ complaints, estimated revenue, license, the authenticity of the games, quality of client support, fairness of the condition, limits on withdrawals, winnings and other factors. Read the full review below and find out more about this casino. According to our research and estimates, casino Parimatch is a middle-sized online casino in terms of revenue. Income of the casino is an important factor. Large casinos shouldn't have problems paying out big wins, as such occurrences are more likely to happen big winnings in small casinos. We have found 1 complaint directly to this casino. Because of this complaint we gave this casino 576 dark points. You can find more information about these complaints and dark points below. Casino Parimatch - is a good casino. We regarded this rating because it manages many things. But there are some facts which deprive us to estimate it as a good or perfect reputation. Despite this, you can expect this casino to be a good place to play.
                        </span>
                    </div>
                </div>
                <div className={styles.bonusesBlocks}>
                    <BonusBlock />
                    <BonusBlock />
                    <BonusBlock />
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