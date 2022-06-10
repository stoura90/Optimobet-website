import styles from "../../styles/components/casino/BonusBlock.module.css"
import Image from "next/image"

export default function BonusBlock({ }) {

    return (
        <div className={styles.bonusBlock}>
            <div className={styles.bonusData}>
                <span className={styles.bonusTitle}>
                    100% BONUS ON SPORT
                </span>
                <div className={styles.bonusOptions}>
                    <div className={styles.option}>
                        <span className={styles.optionTitle}>
                            Minimal Deposit
                        </span>
                        <span className={styles.optionData}>
                            10 EUR/ 100SEK/ 30 PLN/ 500 RUB
                        </span>
                    </div>
                    <div className={styles.option}>
                        <span className={styles.optionTitle}>
                            Value per spin
                        </span>
                        <span className={styles.optionData}>
                            X
                        </span>
                    </div>
                    <div className={styles.option}>
                        <span className={styles.optionTitle}>
                            Wagering
                        </span>
                        <span className={styles.optionData}>
                            X
                        </span>
                    </div>
                    <div className={styles.option}>
                        <span className={styles.optionTitle}>
                            Maximum Bet
                        </span>
                        <span className={styles.optionData}>
                            50 Euro (or the equivalent in the account currency)
                        </span>
                    </div>
                    <div className={styles.option}>
                        <span className={styles.optionTitle}>
                            Maximum Cashout
                        </span>
                        <span className={styles.optionData}>
                            X
                        </span>
                    </div>
                    <div className={styles.option}>
                        <span className={styles.optionTitle}>
                            Bonus expiration
                        </span>
                        <span className={styles.optionData}>
                            X
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.getBonusArea}>
                <button className={styles.getBonusButton}>
                    Get Bonus
                </button>
            </div>
        </div>
    )
}