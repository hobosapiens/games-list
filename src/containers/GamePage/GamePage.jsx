import PropTypes from 'prop-types'; 
import { useParams } from 'react-router';

import styles from './GamePage.module.css';

const GamePage = ({ game }) => {
    const { namn } = useParams();
    return (
        <>
            <div>Game Page</div>
            <div>{namn}</div>
        </>
    )
}

GamePage.propTypes = {
    game: PropTypes.object
}

export default GamePage;