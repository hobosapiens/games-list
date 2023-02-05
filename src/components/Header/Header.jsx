import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
    return (
        <>
            <ul>
                <li><NavLink to="/spel">Games</NavLink></li>
                <li><NavLink to="/favoriter">Favorites</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/spel/sportspel">Sportspel</NavLink></li>
                <li><NavLink to="/spel/strategispel">Strategispel</NavLink></li>
                <li><NavLink to="/spel/kortspel">Kortspel</NavLink></li>
                <li><NavLink to="/spel/pusselspel">Pusselspel</NavLink></li>
                <li><NavLink to="/spel/actionspel">Actionspel</NavLink></li>
                <li><NavLink to="/spel/ordspel">Ordspel</NavLink></li>
            </ul>
        </>
    )
}

export default Header;