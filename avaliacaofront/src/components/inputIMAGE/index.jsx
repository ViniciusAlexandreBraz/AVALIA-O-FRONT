import { useState } from "react"
import styles from "./styles.module.css"


export default function IMAGE(){

    const [evento, setEvento] = useState({
        dataFim: ""
    })

    function inserirEvento(e) {
         e.preventDefault()
 
         axios.post('http://localhost:3000/eventos', evento)
             .then(resultado => console.log(resultado.data)).catch
             (erro => console.log(erro))
     }
    return(
        <div className={styles.botao} onSubmit={e => inserirEvento(e)}>
              <input className={styles.nomeBtn}  type="file"
                id="imagem"
                value={evento.imagem}
                onChange={e => setEvento({ ...evento, imagem: e.target.value })}
            />
        </div>
      
    )
}
