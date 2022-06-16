import styles from '../../styles/pages/SlotPage.module.css'
import Image from 'next/image'
import useWindowSize from '../../hooks/useWindowSize'
import Slot from '../../components/Slot'
import { useState, useEffect } from 'react'
import { SwiperSlide } from 'swiper/react';
import SliderWithControls from '../../components/SliderWithControls'

const _slots = [
    {
        id: 1,
        name: 'Slot 1',
        provider: 'ELK Studio',
        type: 'Achievement',
        rating: 4.5,
    },
    {
        id: 2,
        name: 'Slot 2',
        provider: 'Netend',
        type: 'Megaways',
        rating: 4.5,
    },
    {
        id: 3,
        name: 'Slot 3',
        provider: 'YGGDRASIL',
        type: 'Bonus Buy',
        rating: 4.5,
    },
    {
        id: 4,
        name: 'Slot 4',
        provider: 'EGT',
        type: 'Sticky Features',
        rating: 4.5,
    },
    {
        id: 5,
        name: 'Slot 5',
        provider: 'PRAGMATICPLAY',
        type: 'Jackpot',
        rating: 4.5,
    },
    {
        id: 6,
        name: 'Slot 6',
        provider: 'Booming Games',
        type: 'Achievement',
        rating: 4.5,
    },
    {
        id: 7,
        name: 'Slot 7',
        provider: 'IRON DOG',
        type: 'Megaways',
        rating: 4.5,
    },
    {
        id: 8,
        name: 'Slot 8',
        provider: 'BETSOFT',
        type: 'Bonus Buy',
        rating: 4.5,
    },
    {
        id: 9,
        name: 'Slot 9',
        provider: '2by2gaming',
        type: 'Sticky Features',
        rating: 4.5,
    }
]

export default function SlotPage() {
    const { width, height } = useWindowSize()
	const [ offsetSlots, setOffsetSlots ] = useState()

	useEffect(()=>{
		const chunkSize = Math.trunc(width*0.8/(250+19))
		let offset = []
		for (let i = 0; i < _slots.length; i += chunkSize) {
			offset.push(_slots.slice(i, i + chunkSize))
		}
		setOffsetSlots(offset)
	},[width])

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
            <div className={styles.slotPage}>
                <div className={styles.emptyBlocks}>
                    <div />
                    <div />
                </div>
                <div className={styles.aboutSlot}>
                    <span>
                        Взломайте химический набор, наденьте пару защитных очков и приготовьтесь экспериментировать с древним искусством алхимии с этим игровым автоматом от Euro Games Technology. Знали ли вы, что древние алхимики стремились превратить все, что они могли получить в руки, в золото? Что ж, вы можете изучить Секреты алхимии и, возможно, получить в свои руки свою долю золота с этим игровым автоматом с 5 барабанами и 25 линиями выплат. С помощью болгарских разработчиков программного обеспечения Euro Games Technology в качестве катализатора этого реактивного игрового автомата вы можете быть уверены, вы получите достойный результат от качественного развлечения от Secrets of Alchemy.
                    </span>
                    <div className={styles.ourScore}>
                        <div className={styles.ourScoreHeader}>
                            <span className={styles.scoreHeaderText}>
                                Our Score
                            </span>
                            <span className={styles.scorePoints}>
                                7.2
                            </span>
                        </div>
                        <span className={styles.ourScoreText}>
                            Интересная и несложная игра. Тем не менее, в графике нет ничего особенного, особенно по сравнению с другими игровыми автоматами, доступными в настоящее время.
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.slotsSlider}>
                <div className={styles.slotsSliderHeader}>
                    <div className={styles.slotsSliderTitle}>
                        <span className={styles.secondText}>
                            Secondary
                        </span>
                        <span className={styles.mainText}>
                            Main
                        </span>
                    </div>
                    <div className={styles.seeMore}>
                        See More
                    </div>
                </div>
                {offsetSlots && offsetSlots.length>0 &&
					<SliderWithControls>
						{offsetSlots.map((item, index) => (
							<SwiperSlide className={styles.slotSlide} key={index}>
								{item.map(slot => (
									<div 
										style={{
											width:"calc((100% - "+30*(Math.trunc(width*0.8/(250+19)) - 1)+"px)/"+Math.trunc(width*0.8/(250+19))+")", 
											flex:"initial"
										}}
										key={`slot_${slot.id}`}
									>
										<Slot
            							    {...slot}
            							/>
									</div>
								))}
							</SwiperSlide>
						))}
					</SliderWithControls>
				}
            </div>
        </div>
    )
}

SlotPage.withHeader = true;
SlotPage.withFooter = true;