
import styles from "./styles.module.css"
import { useState } from "react"
import axios from "axios"

export default function TextArea() {


    const [evento, setEvento] = useState({
        descricao: ""
    })

    const [mensagem, setMensagem] = useState("")

    function inserirEvento(e) {
        e.preventDefault()

        axios.post('http://localhost:3001/eventos', evento)
            .then(resultado => {
                console.log(resultado.data)
                setEvento({
                    descricao: ""
                })
                setMensagem("Evento cadastrado com sucesso!")
            })
            .catch(erro => console.log(erro))
    }

    return (

        <form onSubmit={e => inserirEvento(e)}>
            <div className={styles.container}>
                <textarea placeholder="Descreva sobre o Evento" className={styles.box}
                    value={evento.descricao}
                    required=""
                    onChange={e => setEvento({ ...evento, descricao: e.target.value })}
                />
            </div>
        </form >
    )
}

