import PropTypes from 'prop-types';

import styles from './UiButtonBig.module.scss';

const UiButtonBig = ({text, onClick, disabled = false}) => {
    return (
        <button className={styles.button} onClick={onClick} disabled={disabled}>
            <span>{text}</span>
        </button>
    )
}

UiButtonBig.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default UiButtonBig;