import Link from "next/link"
import styles from "./styles.module.css"

export default function Card({ id,imagem, imagemFundo, titulo, dataInicio, dataFim, local, }) {
    return (
        <>
         <div className={styles.card}>
            <Link href={`/eventos/${id}`}>
                <h1 className={styles.cardTitulo}>{titulo}</h1>
                <img className={styles.imagem} src={imagem} />
                <div>Data Inicio:{dataInicio}</div>
                <div>Data Inicio:{dataFim}</div>
                <div>local:{local}</div>
            </Link>
        </div >

        </>
       
    )
}