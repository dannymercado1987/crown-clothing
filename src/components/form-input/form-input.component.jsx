import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input classname='form-input' onChange={handleChange} {...otherProps} ></input>
        {
            label ?
                (<label
                    classname={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
                >
                    {label}
                </label>
                ) : null}
    </div>
);


export default FormInput;