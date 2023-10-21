import { useState } from "react"

export default function IMGfundo(){

    const [evento, setEvento] = useState({
        imagemFundo: ""
    })

    function inserirEvento(e) {
         e.preventDefault()
 
         axios.post('http://localhost:3000/eventos', evento)
             .then(resultado => console.log(resultado.data)).catch
             (erro => console.log(erro))
     }
    return(
        <div onSubmit={e => inserirEvento(e)}>
              <input type="file"
                id="imagemFundo"
                value={evento.imagemFundo}
                onChange={e => setEvento({ ...evento, imagemFundo: e.target.value })}
            />
        </div>
      
    )
}
