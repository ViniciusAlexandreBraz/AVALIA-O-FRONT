import styles from "./styles.module.css"
import { useState } from 'react';
import Link from 'next/link'


export default function Cabecalho() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (

        <div className={styles.tela}>
            <header className={styles.cabecalho}>
                <h1 className={styles.titulo}>Event Center</h1>
                <div>

                    <Link href="/">
                        <h1 className={styles.git}>HOME</h1>
                    </Link>

                    <Link
                        href="/cadastrar">
                        <h1 className={styles.git}>CADASTRAR</h1>
                    </Link>

                    <Link
                        href="/saibaMais">
                        <h1 className={styles.git}>SAIBA MAIS</h1>
                    </Link>
                </div>
               
            </header>
        </div>
    );
}