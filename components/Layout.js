import Head from 'next/head';
//Styles
import styles from '../styles/Layout.module.css';
//Components
import Header from './Header';
import Footer from './Footer';
export default function Layout({ title, keywords, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords} />
            </Head>
            <Header />
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'DJ Events | Find the hottes parties',
    keywords: 'DJ , Music , Edm , Events'
}
