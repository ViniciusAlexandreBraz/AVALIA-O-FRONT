import styles from "./styles.module.css"
import { useState } from "react"
import axios from "axios"
import Label from "../label"

export default function Formulario() {

    const [evento, setEvento] = useState({
        titulo: "",
        dataInicio: "",
        dataFim: "",
        local: ""
    })

    function inserirEvento(e) {
        e.preventDefault()

        axios.post('http://localhost:3001/eventos', evento)
            .then(resultado => console.log(resultado.data)).catch
            (erro => console.log(erro))
    }

    return (
        
            <form onSubmit={e => inserirEvento(e)}>
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        Cadastrar <span>Eventos</span>
                    </h1>
                    <Label />
                    <div>
                        <label className="styles.label5">Local</label>
                        <input type="local"
                            id="Local"
                            value={evento.local}
                            onChange={e => setEvento({ ...evento, local: e.target.value })} />
                    </div>
                    <div>
                        <button>Cadastrar</button>
                    </div>
                </div>
            </form>

    )
}