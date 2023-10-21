// componente de rodapé

import styles from './styles.module.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

import Link from 'next/link';

export default function Rodape() {
    return (
        <>
            <main className={styles.main}></main>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.contatos}>
                        <h1>Event Center</h1>
                        <p>Plataforma de Eventos - Aulas/Front-Marco-Andrade</p>

                        <div className={styles.footerSocialMedia} id='footer_social_media'>

                            <Link href='https://www.instagram.com/iamtheviny/' className={styles.footerLink1} id='instagram'>
                                <AiOutlineInstagram className={styles.Instagram} />
                            </Link>
                            <Link href='https://www.linkedin.com/in/vinicius-alexandre-braz-oliveira-9083381b5/' className={styles.footerLink2} id='Linkedin'>
                                <AiOutlineLinkedin className={styles.Linkedin} />
                            </Link>
                            <Link href="https://github.com/ViniciusAlexandreBraz" className={styles.footerLink3} id='Email'>
                                <AiFillGithub className={styles.Email} />
                            </Link>
                           
                        </div>


                    </div>
                    <div>
                        <ul className={styles.footerList}>
                            <Link href="https://portal.ifro.edu.br/vilhena">IFRO - Campus Vilhena</Link>
                        </ul>
                    </div>

                </div>
                <div className={styles.footerCopyrigth}>

                    <AiOutlineCopyrightCircle  />
                        <p className={styles.copy}>2023 - Vinicius Alexandre</p>
                </div>
            </footer>

        </>

    )
}
