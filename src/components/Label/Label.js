import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field diaplsy, htmlFor and block style */
const Label = ({htmlFor, label, required}) => {
    return (
        <label style={{display: 'block'}} htmlFor={htmlFor}>
            {label} {required && <span style={{color: 'red'}}> *</span>}
        </label>
    )
}

Label.propTypes = {
    /** HTML ID for label */
    htmlFor: PropTypes.string.isRequired,

    /** Label text */
    label: PropTypes.string.isRequired,

    /** Display asterisk */
    required: PropTypes.bool
};

export default Label;