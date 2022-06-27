import styles from "../../styles/components/casino/BonusBlock.module.css"
import Image from "next/image"
import Link from "next/link"

export default function BonusBlock({
    maximum_bet,
    minimal_deposit,
    name,
    wagering_requirements,
    value_per_spin,
    maximum_cashout,
    bonus_expiration,
    url
}) {

    return (
        <div className={styles.bonusBlock}>
            <div className={styles.bonusData}>
                <span className={styles.bonusTitle}>
                    {name}
                </span>
                <div className={styles.bonusOptions}>
                    <div className={styles.optionsColumn}>
                        <div className={styles.option}>
                            <span className={styles.optionTitle}>
                                Minimal Deposit
                            </span>
                            <span className={styles.optionData}>
                                {minimal_deposit}
                            </span>
                        </div>
                        <div className={styles.option}>
                            <span className={styles.optionTitle}>
                                Maximum Bet
                            </span>
                            <span className={styles.optionData}>
                                {maximum_bet}
                            </span>
                        </div>
                    </div>
                    <div className={styles.optionsColumn}>
                        <div className={styles.option}>
                            <span className={styles.optionTitle}>
                                Value per spin
                            </span>
                            <span className={styles.optionData}>
                                {value_per_spin}
                            </span>
                        </div>
                        <div className={styles.option}>
                            <span className={styles.optionTitle}>
                                Maximum Cashout
                            </span>
                            <span className={styles.optionData}>
                                {maximum_cashout}
                            </span>
                        </div>
                    </div>
                    <div className={styles.optionsColumn}>
                        <div className={styles.option}>
                            <span className={styles.optionTitle}>
                                Wagering
                            </span>
                            <span className={styles.optionData}>
                                {wagering_requirements}
                            </span>
                        </div>
                        <div className={styles.option}>
                            <span className={styles.optionTitle}>
                                Bonus expiration
                            </span>
                            <span className={styles.optionData}>
                                {bonus_expiration}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.getBonusArea}>
                {/* <Link href={url} passHref> */}
                <button className={styles.getBonusButton}>
                    Get Bonus
                </button>
                {/* </Link> */}
            </div>
        </div>
    )
}