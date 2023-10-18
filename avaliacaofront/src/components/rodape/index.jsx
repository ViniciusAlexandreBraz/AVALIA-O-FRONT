// componente de rodapé

import styles from './styles.module.css';

export default function Rodape() {
    return (
        <footer className={styles.RodapeBox}>
            <div className={styles.container}>
                <div className={styles.logosprojeto}>
                    <img src="logobranca.png" alt="Logo do Ifro" />
                    <img src="logo_fslab.png" alt="Logo do FS Lab" />
                </div>
                <div className={styles.redessociais}>
                    <img src="Instagram.png" alt="Logo do Instragram" />
                    <img src="facebook.png" alt="Logo do Facebook" />
                </div>
            </div>
            <div className={styles.descricao}>
                <img src="Vector.svg" alt="imagem de logo" />
                <p>Plataforma de Ensino - 2023. Todos os direitos reservados</p>
            </div>
        </footer>
    )
}
