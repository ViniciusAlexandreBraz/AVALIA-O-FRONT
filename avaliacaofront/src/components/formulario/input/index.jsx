import styles from './Styles.module.css'

export default function Input({ text, handleOnChange, ...props }) {
    return (
        <label className={Styles.label}>
            {text}
            <input  {...props}
                onChange={handleOnChange}
                className={styles.inputbordas}
/>
            <span className={styles.focusborder}> </span>
        </label>
    )
}