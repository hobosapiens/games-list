import PropTypes from 'prop-types';

import styles from './UiButtonBig.module.css';

const UiButtonBig = ({text, onClick, disabled}) => {
    return (
        <button>
            {text}
        </button>
    )
}

UiButtonBig.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default UiButtonBig;