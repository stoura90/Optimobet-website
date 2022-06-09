import Header from '../components/Header';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const withHeader = Component.withHeader || false;

    return (
        <>
            {withHeader && <Header />}
            <div style={{ paddingTop: withHeader ? 118 : 0 }}>
                <Component {...pageProps} />
            </div>
        </>
    )

}

export default MyApp
