import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.css'

import { SwiperSlide } from 'swiper/react';
import SliderWithControls from '../components/SliderWithControls'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Stars from '../components/Stars';

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

        <div className={styles.categoryBlocks}>
          <div className={styles.categoryBlock}>
            <Image
              src="/placeholder.png"              
              objectFit='cover'
              width={180}
              height={180}
            />
            <div className={styles.categoryInfo}>
              <span className={styles.categoryTitle}>
                CATEGORY
              </span>
              <span className={styles.categoryDescription}>
                234 items
              </span>
            </div>
          </div>
          <div className={styles.categoryBlock}>
            <Image
              src="/placeholder.png"              
              objectFit='cover'
              width={180}
              height={180}
            />
            <div className={styles.categoryInfo}>
              <span className={styles.categoryTitle}>
                CATEGORY
              </span>
              <span className={styles.categoryDescription}>
                234 items
              </span>
            </div>
          </div>
          <div className={styles.categoryBlock}>
            <Image
              src="/placeholder.png"              
              objectFit='cover'
              width={180}
              height={180}
            />
            <div className={styles.categoryInfo}>
              <span className={styles.categoryTitle}>
                CATEGORY
              </span>
              <span className={styles.categoryDescription}>
                234 items
              </span>
            </div>
          </div>
          <div className={styles.categoryBlock}>
            <Image
              src="/placeholder.png"              
              objectFit='cover'
              width={180}
              height={180}
            />
            <div className={styles.categoryInfo}>
              <span className={styles.categoryTitle}>
                CATEGORY
              </span>
              <span className={styles.categoryDescription}>
                234 items
              </span>
            </div>
          </div>
        </div>

        <div className={styles.promoBlocks}>
          <div className={styles.promoBlocksHeader}>
            <span className={styles.promoBlocksSubTitle}>
              subtitle
            </span>
            <span className={styles.promoBlocksTitle}>
              title
            </span>
          </div>
          <div className={styles.promoBlocksContent}>
            <div className={styles.promoBlock}>
              <Image
                src="/placeholder.png"              
                objectFit='cover'
                layout='fill'
              />
            </div>
            <div className={styles.promoBlock}>
              <Image
                src="/placeholder.png"              
                objectFit='cover'
                layout='fill'
              />
            </div>
          </div>
        </div>

        <div className={styles.sitesGallery}>
          <div className={`${styles.siteCard} ${styles["badRep"]}`}>
            <div className={styles.cardHeader}>
              <Image
                src="/placeholder.png"              
                objectFit='cover'
                width={100}
                height={50}
              />
              <div className={styles.reputation}>
                <span>
                  bad reputation
                </span>
                <div className={styles.repVisualizer}>
                  <CircularProgressbar 
                    value={25} 
                    text={`25%`}
                    styles={{
                      root: {},
                      path: {
                        stroke: `#EA0000`,
                        strokeWidth:"4px"
                      },
                      trail: {
                        stroke: '#EFEFEF'
                      },
                      text: {
                        fill: '#EA0000',
                        fontWeight: 700
                      }
                    }}
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
                  <Stars points={4.5}/>               
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
        </div>
      </main>
    </div>
  )
}
