import Link from 'next/link';
import styles from '../styles/Footer.module.css';
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &Copy; DJ Events 2022</p>
            <span>
                <Link href='/about'>
                    About This Project
                </Link>
            </span>

        </footer>
    )
}
