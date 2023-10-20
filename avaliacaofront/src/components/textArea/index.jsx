
import styles from "./styles.module.css"
import { useState } from "react"
import axios from "axios"

export default function TextArea() {


    const [evento, setEvento] = useState({
        descricao: ""
    })

    function inserirEvento(e) {
        e.preventDefault()

        axios.post('http://localhost:3000/eventos', evento)
            .then(resultado => console.log(resultado.data)).catch
            (erro => console.log(erro))
    }

    return (

        <form onSubmit={e => inserirEvento(e)}>
            <div className={styles.container}>
                <textarea className={styles.box} rows="4" cols="24"
                    value={evento.descricao}
                    onChange={e => setEvento({ ...evento, descricao: e.target.value })}
                />
            </div>
        </form >

    )
}

