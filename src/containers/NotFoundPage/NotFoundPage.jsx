import { useLocation } from 'react-router';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    let location = useLocation();

    return (
        <>
            <div>No match for <u>{location.pathname}</u></div>
        </>
    )
}

export default NotFoundPage;