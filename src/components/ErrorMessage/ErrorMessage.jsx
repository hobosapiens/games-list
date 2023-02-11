import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ message }) => {
    return (
        <>
            <p className={styles.error}>
                Något gick fel.<br />
                Vi kunde inte ladda listan med spel.
            </p>
        </>
    )
}

export default ErrorMessage;