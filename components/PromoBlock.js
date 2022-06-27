import styles from '/styles/components/PromoBlock.module.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function PromoBlock({bgColor, charactersImage, charactersWidth}) {
	const [buttonBg, setButtonBg] = useState("")

	useEffect(()=>{
		switch (bgColor) {
			case "#4B4453":
				setButtonBg("#F2F2F233")
				break;		
			default:
				setButtonBg("")
				break;
		}
	},[bgColor])

	return (
		<div className={styles.promoBlock}>
			<div 
				className={styles.promoBackground} 
				style={{background: bgColor || ""}} 
			/>
			<div className={styles.promoContent}>
				<div className={styles.promoContentInfo}>
					<div className={styles.promoTitle}>
						<div className={styles.promoReputation}>
							<CircularProgressbar
								value={75}
								text={`75%`}
								styles={{
									root: {},
									path: {
										stroke: `#FFFFFF`,
										strokeWidth: "4px"
									},
									trail: {
										stroke: '#EFEFEF44'
									},
									text: {
										fill: '#FFFFFF',
										fontWeight: 700
									}
								}}
							/>
						</div>
						<div className={styles.promoSiteInfo}>
							<span className={styles.promoCountry}>
								Georgia
							</span>
							<Image
								src="/placeholder.png"
								objectFit='cover'
								width={80}
								height={32}
							/>
						</div>
					</div>
					<div className={styles.promoBonusInfo}>
						<span className={styles.promoBonus}>
							Welcome package up to 200 EUR + 100 free spins
						</span>
						<span className={styles.promoCheckInfo}>
							Enormous casino, popular in Ukraine
						</span>
					</div>
				</div>
				<div className={styles.promoBonusButton}>
					<button 
						className={styles.promoGetBonus}
						style={{backgroundColor: buttonBg}}
					>
						Get Bonus
					</button>
					<a className={styles.promoBonusApply}>
						View more
					</a>
				</div>
			</div>
			<div 
				className={styles.characters}
				style={{width: charactersWidth || ""}}
			>
				{charactersImage && <Image
					src={charactersImage}
					objectFit='contain'
					layout='fill'
				/>}
			</div>
		</div>
	)
}