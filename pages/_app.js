import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }) {
    const withHeader = Component.withHeader || false;
    const withFooter = Component.withFooter || false;

    return (
        <CookiesProvider>
            {withHeader && <Header />}
            <div style={{ paddingTop: withHeader ? 118 : 0 }}>
                <Component {...pageProps} />
            </div>
            {withFooter && <Footer />}
        </CookiesProvider>
    )

}

export default MyApp
