import loaderImg from './img/spinner.gif';

import styles from './UiLoader.module.css';

const UiLoader = () => {
    return (
        <>
            <img src={loaderImg} alt="loader" />
        </>
    )
}

export default UiLoader;