import styles from './ErrorMessage.module.scss';

const ErrorMessage = () => {
    return (
        <div className={styles.error}>
            Något gick fel.<br />
            Vi kunde inte ladda listan med spel.
        </div>
    )
}

export default ErrorMessage;