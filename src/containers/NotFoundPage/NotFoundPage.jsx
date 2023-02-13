import { useLocation } from 'react-router';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    let location = useLocation();

    return (
        <div className={ styles.not_found }>Ingen match för <u>{location.pathname}</u></div>
    )
}

export default NotFoundPage;