import styles from '/styles/components/PromoBlock.module.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image'

export default function PromoBlock() {
	return (
		<div className={styles.promoBlock}>
			<div className={styles.promoBackground} />
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
					<button className={styles.promoGetBonus}>
						Get Bonus
					</button>
					<a className={styles.promoBonusApply}>
						View more
					</a>
				</div>
			</div>
			<div className={styles.characters}>
				<Image
					src="/placeholder.png"
					objectFit='cover'
					layout='fill'
				/>
			</div>
		</div>
	)
}