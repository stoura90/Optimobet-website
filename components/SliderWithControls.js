import { useRef } from 'react';
import styles from '../styles/components/SliderWithControls.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// children = [<SwiperSlide>content</SwiperSlide>,...] 
export default function SliderWithControls({children = []}) {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    return (
        <Swiper
            spaceBetween={38}
            slidesPerView={"auto"}
            centeredSlides={true}
            resistanceRatio={0}
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
            className={styles.sliderWrap}
        >
            {children}
            <div ref={navigationPrevRef} className={styles.slideNavPrev}>{"<"}</div>
            <div ref={navigationNextRef} className={styles.slideNavNext}>{">"}</div>
        </Swiper>
    )
}