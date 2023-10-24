import Input from "../input"
import InputDataInicio from "../inputDataInicio"
import InputDataFim from "../inputDataFim"
import InputLocal from "../inputLocal"
import InputIMAGE from "../inputIMAGE"
import Button from "../button"


import TextArea from "../textArea"
import styles from "./styles.module.css"

export default function () {
    return (
        <>
            <div className={styles.label}>
                <label >Titulo
                    <Input />
                </label>
                <label>Descrição
                    <TextArea />
                </label>
                <label>Local <InputLocal />
                </label>

                <label className={styles.data}>
                    Data Inicio:
                    <InputDataInicio />
                    Data Fim:
                    <InputDataFim />
                </label>

                <label className={styles.file}> Selecione a Imagem
                    <InputIMAGE />
                </label>
                <Button type='submit' />
            </div>
        </>
    )
}