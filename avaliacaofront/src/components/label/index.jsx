import Input from "../input"
import InputDataInicio from "../inputDataInicio"
import InputDataFim from "../inputDataFim"
import InputLocal from "../inputLocal"

import TextArea from "../textArea"
import styles from "./styles.module.css"

export default function () {
    return (
        <>
            <div className={styles.label}>
                <label className={styles.titulo}>Titulo</label>
                <Input />
            </div>
            <div>
                <label className={styles.descricao}>Descrição</label>
                <TextArea />
            </div>
            <div className={styles.container}>
                <div>

                    <label className={styles.data}>Data Inicio:</label>
                    <InputDataInicio />

                </div>
                <div>
                    <label className={styles.data} >Data Fim:</label>
                    <InputDataFim />
                </div>
            </div>

            <div>
                <label className={styles.local}>Local</label>
                <InputLocal />
            </div>
        </>
    )
}