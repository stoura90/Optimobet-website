import Header from '../components/Header';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const withHeader = Component.withHeader || false;

    return (
        <>
            {withHeader && <Header />}
            <div className="pageWrap">
                <Component {...pageProps} />
            </div>
        </>
    )

}

export default MyApp
