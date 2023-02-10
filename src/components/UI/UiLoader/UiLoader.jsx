import IconSpinner from '@components/Icons/IconSpinner';

import styles from './UiLoader.module.scss';

const UiLoader = () => {
    return (
        <div className={styles.loader}>
            <IconSpinner />
        </div>
    )
}

export default UiLoader;