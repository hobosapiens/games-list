import { useLocation } from 'react-router';

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    let location = useLocation();

    return (
        <>
            <div>No match for <u>{location.pathname}</u></div>
        </>
    )
}

export default NotFoundPage;