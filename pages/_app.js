import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const withHeader = Component.withHeader || false;
    const withFooter = Component.withFooter || false;

    return (
        <>
            {withHeader && <Header />}
            <div style={{ paddingTop: withHeader ? 118 : 0 }}>
                <Component {...pageProps} />
            </div>
            {withFooter && <Footer />}
        </>
    )

}

export default MyApp
