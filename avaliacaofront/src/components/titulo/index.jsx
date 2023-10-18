import styles from "./styles.module.css";
import Link from 'next/link';


export default function Titulo() {

    return (
        <>
            <div className={styles.title_container}>
                <h1 className={styles.title}>
                    Central <span>De Eventos</span>
                </h1>
            </div>
        </>

    )
}