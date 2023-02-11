import { useLocation } from 'react-router';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    let location = useLocation();

    return (
        <>
            <div>Ingen match för <u>{location.pathname}</u></div>
        </>
    )
}

export default NotFoundPage;