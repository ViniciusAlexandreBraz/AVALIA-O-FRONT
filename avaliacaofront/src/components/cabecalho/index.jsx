import styles from "./styles.module.css"
import Link from 'next/link'


export default function Cabecalho() {

    return (
        <div className={styles.tela}>
            <header className={styles.cabecalho}>
                <h1 className={styles.titulo}>Central de Eventos</h1>
                <div >

                    <Link href="/">
                        <h1 className={styles.git}>HOME</h1>
                    </Link>

                    <Link href="https://gitlab.fslab.dev/VinitheGoat0221">
                        <h1 className={styles.git}>GITHUB</h1>
                    </Link>

                    <Link
                        href="">
                        <h1 className={styles.git}>CADASTRAR</h1>
                    </Link>
                </div>
            </header>
        </div>


    )
}