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

export default function SiteCard({
    rep = 100,
    shared_content,
    claim_bonus_url,
    claim_bonus_text,
    features,
    games,
    rating,
    image_source
}) {
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
    ) {
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
                    src={`${process.env.IMAGE_URL}${image_source}`}
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
                        {shared_content?.name}
                    </span>
                    <div className={styles.starsBlock}>
                        <Stars points={rating} />
                    </div>
                </div>
                <div className={styles.contentData}>
                    <span className={styles.bonus}>
                        {claim_bonus_text}
                    </span>
                    {features?.map(feature => (
                        <span key={feature} className={styles.checkInfo}>
                            {feature}
                        </span>
                    ))
                    }
                </div>
                <div className={styles.contentGames}>
                    <span className={styles.gamesTitle}>
                        Available Games
                    </span>
                    <div className={styles.gamesCircles}>
                        {
                            games?.slice(0, 6).map(game => (
                                <div key={`game_${game.id}`}>
                                    <Image
                                        src={`${process.env.IMAGE_URL}/${game.image_source}`}
                                        layout="fill"
                                        objectFit='contain'
                                        alt={game.name}
                                    />
                                </div>
                            ))
                        }
                        {games?.length > 6 && <div>
                            +{games?.length - 6}
                        </div>}
                    </div>
                </div>
                <div className={styles.buttonBonus}>
                    <a
                        href={claim_bonus_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.getBonus}
                    >
                        Get Bonus
                    </a>
                    <span className={styles.bonusApply}>
                        T{'&'}C Apply
                    </span>
                </div>
            </div>
        </div>
    )
}