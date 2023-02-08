import PropTypes from 'prop-types';

import styles from './UiButton.module.css';

const UiButtonSmall = ({ text, onClick, disabled }) => (
    <button
        onClick={onClick}
        className={styles.button}
        disabled={disabled}
    >
        {text}
    </button>
)

UiButtonSmall.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default UiButtonSmall;