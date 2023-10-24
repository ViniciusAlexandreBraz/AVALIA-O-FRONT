import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles.module.css"

export default function EventosHome() {
    const [evento, setEvento] = useState({})

    const router = useRouter()

    useEffect(() => {

        const id = router.query.id

        if (id) {
            console.log(`executou`)
            axios.get(`http://localhost:3001/eventos/${id}`)
                .then(resultado => setEvento(resultado.data))
        }


    }, [router])

    return (
        <div className={styles.tela}>
             
                <div className={styles.card}>
                    <div>
                        <img className={styles.img} src={evento.imagemFundo} />
                    </div>
                    <div style={{textAlign: "justify"}}>
                        <h1 className={styles.cardTitulo}>{evento.titulo}
                        </h1>
                              <p>{evento.descricao}</p>
                        <p><b>Local: </b>{evento.local}</p>
                    </div>
                </div>
          
        </div>
        

    )
}