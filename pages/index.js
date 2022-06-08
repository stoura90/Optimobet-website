import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.css'

import { SwiperSlide } from 'swiper/react';
import SliderWithControls from '../components/SliderWithControls'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>OPTIMOBET</title>
        <meta name="description" content="OPTIMOBET WEBSITE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.mainSlider}>
          <SliderWithControls>
            <SwiperSlide className={styles.sliderBlock}>
              <div>
                <Image
                  className={styles.sliderPicture}
                  src="/placeholder.png"
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.sliderBlock}>
              <div>
                <Image
                  className={styles.sliderPicture}
                  src="/placeholder.png"
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.sliderBlock}>
              <div>
                <Image
                  className={styles.sliderPicture}
                  src="/placeholder.png"
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </SwiperSlide>
          </SliderWithControls>
        </div>
      </main>
    </div>
  )
}
