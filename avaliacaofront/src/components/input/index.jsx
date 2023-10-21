import styles from "./styles.module.css"
import { useState } from "react"


export default function Input() {
    const [evento, setEvento] = useState({
        titulo: ""
    })

    function inserirEvento(e) {
         e.preventDefault()
 
         axios.post('http://localhost:3000/eventos', evento)
             .then(resultado => console.log(resultado.data)).catch
             (erro => console.log(erro))
     }

    return (
        <div onSubmit={e => inserirEvento(e)}>  
            <input placeholder="Nome do Evento" className={styles.title}
                type="text"
                id="titulo"
                value={evento.titulo}
                onChange={e => setEvento({ ...evento, titulo: e.target.value })}
            />
        </div>
    )
}