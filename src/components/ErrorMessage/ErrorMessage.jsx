import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ message }) => {
    return (
        <>
            <p className={styles.error}>Something went wrong. <br /> We were unable to load the list of games.</p>
        </>
    )
}

export default ErrorMessage;