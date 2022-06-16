import styles from '../../styles/pages/SlotPage.module.css'
import Image from 'next/image';

export default function SlotPage() {
    return (
        <div className={styles.container}>
            <div className={styles.slotBlock}>
                <div className={styles.slotButtons}>
                    <div className={styles.rateSlot}>
                        Rate Slot
                    </div>
                    <div className={styles.buttonForSlot}>
                        <Image
                            src="/images/icons/heart-downloaded.svg"
                            width={16}
                            height={16}
                        />
                    </div>
                    <div className={styles.buttonForSlot}>
                        <Image
                            src="/images/icons/fullscreen-downloaded.svg"
                            width={16}
                            height={16}
                        />
                    </div>
                    <div className={styles.buttonForSlot}>
                        <Image
                            src="/images/icons/cross-downloaded.svg"
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
                <div className={styles.slotDemoBlock}>
                    <div className={styles.slotData}>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Game provider
                            </span>
                            <span className={styles.dataInfoText}>
                                ELK Studio
                            </span>
                        </div>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Popularity
                            </span>
                            <span className={styles.dataInfoText}>
                                3.0
                            </span>
                        </div>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Reels
                            </span>
                            <span className={styles.dataInfoText}>
                                5
                            </span>
                        </div>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Paylines
                            </span>
                            <span className={styles.dataInfoText}>
                                178
                            </span>
                        </div>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Bonus round
                            </span>
                            <span className={styles.dataInfoText}>
                                Yes
                            </span>
                        </div>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Free spins
                            </span>
                            <span className={styles.dataInfoText}>
                                5
                            </span>
                        </div>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Progressive jackpot
                            </span>
                            <span className={styles.dataInfoText}>
                                -
                            </span>
                        </div>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Gamble feature
                            </span>
                            <span className={styles.dataInfoText}>
                                -
                            </span>
                        </div>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Return to player
                            </span>
                            <span className={styles.dataInfoText}>
                                96.3%
                            </span>
                        </div>
                        <button className={styles.slotButton}>
                            PLAY WITH REAL MONEY
                        </button>
                    </div>
                    <div className={styles.slotDemoView}>
                        <Image
                            src="/placeholder.png"
                            layout='fill'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

SlotPage.withHeader = true;