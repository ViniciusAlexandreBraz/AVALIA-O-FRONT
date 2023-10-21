import { useState } from "react"
import styles from "./styles.module.css"

export default function local() {

    const [evento, setEvento] = useState({
        local: ""
    })

    function inserirEvento(e) {
        e.preventDefault()

        axios.post('http://localhost:3000/eventos', evento)
            .then(resultado => console.log(resultado.data)).catch
            (erro => console.log(erro))
    }
    return (
        <div onSubmit={e => inserirEvento(e)}>
            <div className={styles.container}>
                <input className={styles.local} type="local"
                    id="Local"
                    value={evento.local}
                    onChange={e => setEvento({ ...evento, local: e.target.value })} />
            </div>

        </div>
    )
}