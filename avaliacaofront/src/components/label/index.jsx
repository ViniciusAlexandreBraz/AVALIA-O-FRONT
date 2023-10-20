import TextArea from "../textArea"
import styles from "./styles.module.css"

export default function () {
    return (
        <>
            <div>
                <label className={styles.titulo}>Titulo</label>
            </div>
            <div>
                <label className={styles.descricao} >Descrição</label>
                <TextArea />
            </div>
        </>
    )
}