// componente de rodapé

import styles from './styles.module.css';
import Link from 'next/link';

export default function Rodape() {
    return (
        <>

            <footer className={styles.RodapeBox}>
                <div>
                    <img src={'/_kamer.png'} className={styles.logo} />
                </div>
                <div className={styles.escrita}>
                    <p className={styles.plat}>Plataforma de Eventos - Front End/Aula-Marco-Andrade</p>
                    <p className={styles.plat}>Vinicius Alexandre</p>
                </div>
                <div>
                    <Link className={styles.redes} href="https://portal.ifro.edu.br/vilhena">
                        IFRO - Campus Vilhena
                    </Link>

                    <Link className={styles.redes} href="https://portal.ifro.edu.br/vilhena">
                        Instagram
                    </Link>

                    <Link className={styles.redes} href="https://www.linkedin.com/in/vinicius-alexandre-braz-oliveira-9083381b5/?otpToken=MWEwNjE3ZTgxYTJiY2FjN2IyMjQwNGVjNGYxOWUxYjA4N2M3ZDE0MDkwYWE4ZjYxNzljNzA5NmQ0ZDVmNWJmYWYwZDNkZjgyNzdjMWUzZDk0MDllZWIwZTU3ZGVhMGQ2NzMwZjZhMzVlMmM3NDE3YzJhNmU4ZiwxLDE%3D&midSig=3BBxwBseA4LaY1&eid=dw1no8-lnw0bjsa-ls&midToken=AQFmcl7VnvEEDA&trkEmail=eml-jobs_jymbii_digest-header-0-profile_glimmer-null-dw1no8%7Elnw0bjsa%7Els-null-null&trk=eml-jobs_jymbii_digest-header-0-profile_glimmer&originalSubdomain=br">
                        Linkedin
                    </Link>
                </div>
            </footer>

        </>

    )
}
