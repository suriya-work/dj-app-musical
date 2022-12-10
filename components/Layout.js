import Head from 'next/head';
import { useRouter } from 'next/router';
//Styles
import styles from '../styles/Layout.module.css';
//Components
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';
export default function Layout({ title, keywords, children }) {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords} />
            </Head>
            <Header />
            {/* // in  router comback home  */}
            {router.pathname === '/' && <Showcase />} 
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
