import Input from "../input"
import InputDataInicio from "../inputDataInicio"
import InputDataFim from "../inputDataFim"
import InputLocal from "../inputLocal"
import InputIMAGE from "../inputIMAGE"
import InputImgFundo from "../inputImgFundo"


import TextArea from "../textArea"
import styles from "./styles.module.css"

export default function () {
    return (
        <>
            <div className={styles.label}>
                    <label >Titulo</label>
                    <Input />
            
                    <label>Descrição</label>
                   <TextArea />

                    <label>Local <InputLocal /> </label>
                    <label className={styles.data}>

                    Data Inicio:
                    <InputDataInicio />
                     Data Fim:
                    <InputDataFim /> 

                    </label>

                    <label className="file"> Imagem Inicio</label>
                    <InputIMAGE />

                    <label className="file" >Imagem de Fundo:</label>
                    <InputImgFundo/>

                    
                   
                </div>
           

        </>
    )
}