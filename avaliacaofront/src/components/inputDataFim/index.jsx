import { useState } from "react"

export default function dataFim(){

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
        <div onSubmit={e => inserirEvento(e)}>
              <input style={{ border: "1px solid rgb(143, 12, 200)"}} type="date"
                id="dataFim"
                value={evento.dataInicio}
                onChange={e => setEvento({ ...evento, dataFim: e.target.value })}
            />
        </div>
      
    )
}
