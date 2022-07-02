import { useEffect, useRef, useState } from 'react';
import styles from '../styles/components/SliderWithControls.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

// children = [<SwiperSlide>content</SwiperSlide>,...] 
export default function SliderWithControls({ children = [], loop = false, styleWrap = {}, main = false }) {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    return (
        <Swiper
            spaceBetween={38}
            slidesPerView={"auto"}
            centeredSlides={true}
            resistanceRatio={0}
            loop={loop}
            modules={[Navigation]}
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            height={500}
            allowTouchMove={false}
            className={`${styles.sliderWrap} ${main && styles.mainSl}`}
            style={styleWrap}
        >
            {children}
            <div ref={navigationPrevRef} className={styles.slideNavPrev}>
                <Image
                    src="/images/icons/sliderLeft.svg"
                    width={50}
                    height={50}
                />
            </div>
            <div ref={navigationNextRef} className={styles.slideNavNext}>
                <Image
                    src="/images/icons/sliderRight.svg"
                    width={50}
                    height={50}
                />
            </div>
        </Swiper>
    )
}