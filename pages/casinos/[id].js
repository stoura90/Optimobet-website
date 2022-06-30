import Image from 'next/image';
import styles from '../../styles/pages/CasinoPage.module.css'
import React from 'react';
import Stars from '../../components/Stars'
import InfoBlock from '../../components/casino/InfoBlock'
import BonusBlock from '../../components/casino/BonusBlock'
import APIRequest from '../../functions/requests/APIRequest';
import parse from 'html-react-parser';

export default function CasinoPage({ casino }) {

    return (
        <div className={styles.container}>
            <div className={styles.sideCol}>
                <div className={styles.sticky}>
                    <div className={styles.casinoCard}>
                        <div className={styles.casinoHeaderCard}>
                            <div className={styles.casinoHeaderLogo}>
                                <Image
                                    src={`${process.env.IMAGE_URL}/${casino.image_source}`}
                                    alt={casino.shared_content.name}
                                    objectFit='cover'
                                    layout='fill'
                                />
                            </div>
                        </div>
                        <div className={styles.casinoContentCard}>
                            <span className={styles.casinoCompany}>
                                {casino.shared_content.owner}
                            </span>
                            <span className={styles.casinoName}>
                                {casino.shared_content.name}
                            </span>
                            <div className={styles.stars}>
                                <Stars points={casino.rating} />
                            </div>
                            <div className={styles.bonuses}>
                                {casino.features.map(tag => (
                                    <span key={`feature_${tag}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className={styles.buttonBonus}>
                                <a
                                    href={casino.website}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={styles.getBonus}
                                >
                                    Visit website
                                </a>
                                <span className={styles.bonusApply}>
                                    T{'&'}C Apply
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.complaint}>
                        Submit a complaint
                    </div> */}
                    <div className={styles.advantages}>
                        {casino.positives.map(tag => (
                            <span key={`pos_${tag}`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className={styles.disadvantages}>
                        {casino.negatives.map(tag => (
                            <span key={`neg_${tag}`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.mainCol}>
                <div className={styles.infoBlocksWrap}>
                    <InfoBlock
                        iconSrc="/images/icons/casino/current-location.svg"
                        infoTitle="IP Address From"
                        infoText="Georgia"
                        dataImages={["/placeholder.png"]}
                    />
                    <InfoBlock
                        iconSrc="/images/icons/casino/users.svg"
                        infoTitle="Support From"
                        infoText="United Kingdom"
                        dataImages={["/placeholder.png", "/placeholder.png"]}
                    />
                    <InfoBlock
                        iconSrc="/images/icons/casino/language.svg"
                        infoTitle="Website Language"
                        infoText={casino.website_language[0]?.name}
                        dataImages={casino.website_language.map(lang => '/placeholder.png').slice(0, 3)}
                    />
                    <InfoBlock
                        iconSrc="/images/icons/casino/messages.svg"
                        infoTitle="Live Chat"
                        infoText={casino.support_language[0]?.name}
                        dataImages={casino.support_language.map(lang => '/placeholder.png').slice(0, 3)}
                    />
                    <InfoBlock
                        iconSrc="/images/icons/casino/user.svg"
                        infoTitle="Residents From"
                        infoText="Georgia"
                        dataImages={["/images/icons/circle-check.svg"]}
                    />
                    <InfoBlock
                        iconSrc="/images/icons/casino/shield.svg"
                        infoTitle="VPN"
                        infoText="United Kingdom"
                        dataImages={["/images/icons/circle-x.svg"]}
                    />
                    <InfoBlock
                        iconSrc="/images/icons/casino/license.svg"
                        infoTitle="Licensing Authorities"
                        infoText={casino.shared_content.licensing_autorithy}
                        dataText={casino.shared_content.estabilished}
                    />
                </div>
                <div className={styles.casinoText}>
                    <div className={styles.casinoTextBlock}>
                        <span className={styles.blockTitle}>
                            About casino
                        </span>
                        <span>
                            {parse(casino.description)}
                        </span>
                    </div>
                    <div className={styles.casinoTextBlock}>
                        <span className={styles.blockTitle}>
                            Verdict
                        </span>
                        <span>
                            {casino.verdict}
                        </span>
                    </div>
                </div>
                <div className={styles.bonusesBlocks}>
                    {casino.bonuses.map(bonus => (
                        <BonusBlock key={bonus.id} {...bonus} />
                    ))}
                </div>
                <div className={styles.paymentTableBlock}>
                    <span className={styles.paymentTableHeader}>
                        {casino.shared_content.name} Payment Methods
                    </span>
                    <table className={styles.paymentTable}>
                        <thead>
                            <tr>
                                <th>
                                    Payment method
                                </th>
                                <th>
                                    Deposit Limit And Fees
                                </th>
                                <th>
                                    Withdrawal Limit and Fees
                                </th>
                                <th>
                                    Withdrawal Time
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                casino.payment_methods.map(method => (
                                    <tr key={method.id}>
                                        <td>
                                            <div className={styles.payment}>
                                                <Image
                                                    src="/placeholder.png"
                                                    width={48}
                                                    height={32}
                                                />
                                                {method.name}
                                            </div>
                                        </td>
                                        <td>
                                            {method.deposit_limit_and_fees ?? '-'}
                                        </td>
                                        <td>
                                            {method.withdrawal_limit_and_fees ?? '-'}
                                        </td>
                                        <td>
                                            {method.withdrawal_time ?? '-'}
                                        </td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td>
                                    Payment method
                                </td>
                                <td>
                                    Deposit Limit And Fees
                                </td>
                                <td>
                                    Withdrawal Limit and Fees
                                </td>
                                <td>
                                    Withdrawal Time
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.providers}>
                    <span className={styles.providersHeader}>
                        {casino.shared_content.name} Game Providers
                    </span>
                    {casino.providers.map(provider => (
                        <ProviderCard key={provider.id} {...provider} />
                    ))}
                </div>
            </div>
        </div>
    )
}

CasinoPage.withHeader = true;
CasinoPage.withFooter = true;

function ProviderCard({ name, image_source }) {
    return <div className={styles.providerCard}>
        <div className={styles.provider}>
            <Image
                src={`${process.env.IMAGE_URL}/${image_source}`}
                width={48}
                height={32} />
        </div>
        <div className={styles.providerInfo}>
            <span className={styles.providerName}>
                {name}
            </span>
            {/* <span className={styles.providerCount}>
                28 slots
            </span> */}
        </div>
    </div>;
}

export async function getStaticProps({ params }) {
    const { id } = params
    const casino = await APIRequest(`/nolimit/casinos/${id}`)

    return {
        props: {
            casino: casino
        },
        revalidate: 10,
    }
}

export async function getStaticPaths() {
    const casinos = await APIRequest('/nolimit/casinos?no_paginate=1', 'GET')
    const paths = casinos.map(casino => ({ params: { id: casino.id.toString() } }))

    return { paths, fallback: 'blocking' }
}