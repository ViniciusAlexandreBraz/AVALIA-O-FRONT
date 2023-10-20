import styles from "./styles.module.css"

export default function Tcadastro() {

    const [evento, setEvento] = useState({
        titulo: "",
    })

    axios.post('http://localhost:3000/eventos', evento)
        .then(resultado => console.log(resultado.data)).catch
        (erro => console.log(erro))

    return (

        <div className={styles.container}>
            <input type="text"
                id="titulo"
                value={evento.titulo}
                onChange={e => setEvento({ ...evento, titulo: e.target.value })} />
        </div>
    )
}


