import styles from '../../styles/pages/SlotPage.module.css'
import Image from 'next/image'
import useWindowSize from '../../hooks/useWindowSize'
import Slot from '../../components/Slot'
import { useState, useEffect } from 'react'
import { SwiperSlide } from 'swiper/react';
import SliderWithControls from '../../components/SliderWithControls'
import APIRequest from '../../functions/requests/APIRequest'
import parse from 'html-react-parser'
import Link from 'next/link'

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

export default function SlotPage({ slot, providers, slotsForSlider }) {
    const { width, height } = useWindowSize()
    const [offsetSlots, setOffsetSlots] = useState()

    useEffect(() => {
        if (slotsForSlider) {
            const chunkSize = Math.trunc(width * 0.8 / (300 + 19))
            let offset = []
            for (let i = 0; i < slotsForSlider.length; i += chunkSize) {
                offset.push(slotsForSlider.slice(i, i + chunkSize))
            }
            setOffsetSlots(offset)
        }
    }, [width])

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
                                {providers.filter(prov => prov.id == slot.provider_id)[0]?.name || "-"}
                            </span>
                        </div>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Popularity
                            </span>
                            <span className={styles.dataInfoText}>
                                {slot.popularity || "-"}
                            </span>
                        </div>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Reels
                            </span>
                            <span className={styles.dataInfoText}>
                                {slot.reels || "-"}
                            </span>
                        </div>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Paylines
                            </span>
                            <span className={styles.dataInfoText}>
                                {slot.paylines || "-"}
                            </span>
                        </div>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Bonus round
                            </span>
                            <span className={styles.dataInfoText}>
                                {slot.bonus_round && slot.bonus_round != "0" ? "Yes" : "-"}
                            </span>
                        </div>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Free spins
                            </span>
                            <span className={styles.dataInfoText}>
                                {slot.free_spins && slot.free_spins != "0" ? "Yes" : "-"}
                            </span>
                        </div>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Progressive jackpot
                            </span>
                            <span className={styles.dataInfoText}>
                                {slot.progresive_jackpot && slot.progresive_jackpot != "0" ? "Yes" : "-"}
                            </span>
                        </div>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Gamble feature
                            </span>
                            <span className={styles.dataInfoText}>
                                {slot.gamble_feature && slot.gamble_feature != "0" ? "Yes" : "-"}
                            </span>
                        </div>
                        <div className={styles.slotDataInfo}>
                            <span className={styles.dataInfoTitle}>
                                Return to player
                            </span>
                            <span className={styles.dataInfoText}>
                                {slot.return_to_player && slot.return_to_player != "0" ? slot.return_to_player + "%" : "-"}
                            </span>
                        </div>
                        <button className={styles.slotButton}>
                            PLAY WITH REAL MONEY
                        </button>
                    </div>
                    <div className={styles.slotDemoView}>
                        {/* <Image
                            src="/placeholder.png"
                            layout='fill'
                        /> */}
                        {parse(slot.game_script)}
                    </div>
                </div>
            </div>
            <div className={styles.slotPage}>
                <div className={styles.emptyBlocks}>
                    <div />
                    <div />
                </div>
                <div className={styles.aboutSlot}>
                    <span className={styles.slotDescription}>
                        {parse(slot.description)}
                    </span>
                    <div className={styles.ourScore}>
                        <div className={styles.ourScoreHeader}>
                            <span className={styles.scoreHeaderText}>
                                Our Score
                            </span>
                            <span className={styles.scorePoints}>
                                {slot.score}
                            </span>
                        </div>
                        <span className={styles.ourScoreText}>
                            {parse(slot.verdict)}
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.slotsSlider}>
                <div className={styles.slotsSliderHeader}>
                    <div className={styles.slotsSliderTitle}>
                        <span className={styles.secondText}>
                            ELK STUDIO
                        </span>
                        <span className={styles.mainText}>
                            Similar Slots
                        </span>
                    </div>
                    <Link href={"/slots"}>
                        <div className={styles.seeMore}>
                            See More
                        </div>
                    </Link>
                </div>
                {offsetSlots && offsetSlots.length > 0 &&
                    <SliderWithControls>
                        {offsetSlots.map((item, index) => (
                            <SwiperSlide className={styles.slotSlide} key={index}>
                                {item.map(slot => (
                                    <div
                                        style={{
                                            width: "calc((100% - " + 30 * (Math.trunc(width * 0.8 / (300 + 19)) - 1) + "px)/" + Math.trunc(width * 0.8 / (300 + 19)) + ")",
                                            flex: "initial"
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

export async function getStaticProps({ params }) {
    const { id } = params
    const slots = await APIRequest('/slots?no_paginate=1', 'GET')
    const slot = await APIRequest(`/slots/${id}`, 'GET')
    const providers = await APIRequest('/providers', 'GET')
    const slotsForSlider =
        slots
            .filter(item => item.provider_id == slot.provider_id)
            .map(item => (
                {
                    ...item,
                    provider: providers.filter(p => p.id == item.provider_id)[0]?.name ?? null
                }
            ))

    return {
        props: {
            slot,
            providers,
            slotsForSlider
        },
        revalidate: 10,
    }
}

export async function getStaticPaths() {
    const slots = await APIRequest('/nolimit/slots?no_paginate=1', 'GET')
    const paths = slots.map(slot => ({ params: { id: slot.id.toString() } }))

    return { paths, fallback: 'blocking' }
}