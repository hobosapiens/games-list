import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './UiButton.module.scss';

const UiButton = ({ type = 'small', text, onClick, disabled = false }) => (
    <button
        className={cn(
            styles.button, 
            styles[type]
        )}
        onClick={onClick}
        disabled={disabled}
    >
        <span>{text}</span>
    </button>
)

UiButton.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default UiButton;