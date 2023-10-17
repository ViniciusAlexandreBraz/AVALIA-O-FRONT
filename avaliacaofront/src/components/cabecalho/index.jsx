import styles from "./styles.module.css"
import Link from 'next/link'


export default function Cabecalho() {

    return (
        <div className={styles.tela}>
            <header className={styles.cabecalho}>
            <h1 className={styles.titulo}>Central de Eventos</h1>
            <div className={styles.git}>
                <Link
                    href="https://gitlab.fslab.dev/VinitheGoat0221">
                    GITHUB
                </Link>
            </div>
        </header>
        </div>
        

    )
}