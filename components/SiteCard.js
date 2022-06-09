import styles from '/styles/components/SiteCard.module.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Stars from '../components/Stars'
import Image from 'next/image'
import { useState } from 'react'

const percentStyles = {
    "badRep": {
        root: {},
        path: {
            stroke: `#EA0000`,
            strokeWidth: "4px"
        },
        trail: {
            stroke: '#EFEFEF'
        },
        text: {
            fill: '#EA0000',
            fontWeight: 700
        }
    },
    "goodRep": {
        root: {},
        path: {
            stroke: `#FF8457`,
            strokeWidth: "4px"
        },
        trail: {
            stroke: '#EFEFEF'
        },
        text: {
            fill: '#FF8457',
            fontWeight: 700
        }
    },
    "veryGoodRep": {
        root: {},
        path: {
            stroke: `#00C69C`,
            strokeWidth: "4px"
        },
        trail: {
            stroke: '#EFEFEF'
        },
        text: {
            fill: '#00C69C',
            fontWeight: 700
        }
    },
    "perfectRep": {
        root: {},
        path: {
            stroke: `#7F3FFC`,
            strokeWidth: "4px"
        },
        trail: {
            stroke: '#EFEFEF'
        },
        text: {
            fill: '#7F3FFC',
            fontWeight: 700
        }
    }
}

const reputations = [
    [50, "badRep"],
    [75, "goodRep"],
    [95, "veryGoodRep"],
    [100, "perfectRep"],
]

export default function SiteCard({ rep = 100 }) {
    const [reputation, setReputation] = useState(
        reputations.filter(([percent, value]) => (
            rep <= percent
        ))[0][1]
    )
    let reputationN
    switch (
        reputations.filter(([percent, value]) => (
            rep <= percent
        ))[0][1]
    ) 
    {
        case "badRep":
            reputationN = "bad"
            break;
        case "goodRep":
            reputationN = "good"
            break;
        case "veryGoodRep":
            reputationN = "very good"
            break;
        case "perfectRep":
            reputationN = "perfect"
            break;
        default:
            break;
    }
    const [reputationName, setReputationName] = useState(reputationN)

    return (
        <div
            className={`${styles.siteCard} ${styles[reputation]}`}
        >
            <div className={styles.cardHeader}>
                <Image
                    src="/placeholder.png"
                    objectFit='cover'
                    width={100}
                    height={50}
                />
                <div className={styles.reputation}>
                    <span>
                        {reputationName} reputation
                    </span>
                    <div className={styles.repVisualizer}>
                        <CircularProgressbar
                            value={rep}
                            text={`${rep}%`}
                            styles={percentStyles[reputation]}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.contentTitle}>
                    <span>
                        IVI Casino
                    </span>
                    <div className={styles.starsBlock}>
                        <Stars points={4.5} />
                    </div>
                </div>
                <div className={styles.contentData}>
                    <span className={styles.bonus}>
                        100% BONUS ON SPORT
                    </span>
                    <span className={styles.checkInfo}>
                        Smaller online casino
                    </span>
                    <span className={styles.checkInfo}>
                        Popular slots with progressive jackpots
                    </span>
                </div>
                <div className={styles.contentGames}>
                    <span className={styles.gamesTitle}>
                        Available Games
                    </span>
                    <div className={styles.gamesCircles}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className={styles.buttonBonus}>
                    <button className={styles.getBonus}>
                        Get Bonus
                    </button>
                    <span className={styles.bonusApply}>
                        T{'&'}C Apply
                    </span>
                </div>
            </div>
        </div>
    )
}