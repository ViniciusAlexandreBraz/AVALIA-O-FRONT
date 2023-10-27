import styles from '@/components/Formulario/cadastro/styles.module.css'
import Input from './input'
import Textarea from './textArea'
import SubmitButton from './botao'
import Label from './label'
import DateTime from './data'
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form({ btnText }) {

    const [evento, setEvento] = useState({
        titulo: '',
        descricao: '',
        dataInicio: '',
        dataFim: '',
        local: '',
        imagem: '',
       
    })

    function InserirImagem(e) {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()

            reader.onload = function (e) {
                const imagemDataUrl = e.target.result
                setEvento({ ...evento, imagem: imagemDataUrl })
            };
            reader.readAsDataURL(file)
        }
    }


    function inserirEvento(e) {
        e.preventDefault()
        console.log(evento)

        function limparCampos() {
            setEvento({
                titulo: '',
                descricao: '',
                dataInicio: '',
                dataFim: '',
                local: '',
                imagem: '',
              
            });
        }

        axios.post('http://localhost:3001/eventos', evento)
            .then((response) => {
                console.log(response.data)
                limparCampos();
                toast.success('O Evento foi cadastrado com sucesso!')
            })
            .catch((erro) => {
                console.log(erro)
                toast.error('Ocorreu um erro ao cadastrar o evento!')
            });
    }


    return (
        <div className={styles.cadastro}>
            <ToastContainer/>
            < form onSubmit={e => inserirEvento(e)} className={styles.form}>
                <h1 className={styles.pgn}>CADASTRAR <span> EVENTO</span></h1>
                <Label text="Titulo do evento" name="titulo" />
                <Input
                    type="text"
                    text="Titulo do evento"
                    name="titulo"
                    required
                    placeholder="Insira o nome do evento"
                    value={evento.titulo}
                    onChange={(e) => setEvento({ ...evento, titulo: e.target.value })}
                />
                <Label text="Descrição do evento" name="descricao" />
                <Textarea
                    type="text"
                    text="Descrição do evento"
                    name="descricao"
                    required
                    placeholder="Descreva sobre o Evento"
                    value={evento.descricao}
                    onChange={(e) => setEvento({ ...evento, descricao: e.target.value })}
                />
                <Label text="Data Inicial" name="data" />
                <DateTime
                    type="date"
                    text="Data Inicial"
                    name="data"
                    required
                    placeholder="Insira a data do evento"
                    value={evento.dataInicio}
                    onChange={(e) => setEvento({ ...evento, dataInicio: e.target.value })}

                />
                <Label text="Data Final" name="data" />
                <DateTime
                    type="date"
                    text="Data Final"
                    name="data"
                    required
                    placeholder="Insira a data do evento"
                    value={evento.dataFim}
                    onChange={(e) => setEvento({ ...evento, dataFim: e.target.value })}
                />
                <Label text="Local do evento" name="local" />
                <Input
                    type="local"
                    text="Local do evento"
                    name="local"
                    required
                    placeholder="Insira o local do evento"
                    value={evento.local}
                    onChange={(e) => setEvento({ ...evento, local: e.target.value })}
                />
                <Label text="Imagem de Inicio" name="imagem" />
                <Input
                    type="file"
                    text="Imagem do evento"
                    name="imagem"
                    required
                    placeholder="Insira a imagem do evento"
                    accept="image/*"
                    onChange={(e) => InserirImagem(e)}
                />   
                <SubmitButton
                    text="CADASTRAR"  />
            </form >
        </div>
    )
}