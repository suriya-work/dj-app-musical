import { FaMusic } from 'react-icons/fa';
import Link from 'next/link';
//style
import styles from '../styles/Header.module.css';
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    DJ Events
                    <FaMusic />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/events'>
                            Events
                        </Link>
                    </li>


                </ul>
            </nav>

        </header>
    )
}
