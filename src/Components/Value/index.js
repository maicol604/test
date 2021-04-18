import React from 'react';

const Value = ({main, secondary, warm}) => {
    return (
        <div className='value-container'>
            <span>{main}</span>
            <span className={warm?'warm':''}>{secondary}</span>
        </div>
    )
}

Value.defaultProps = {
    warm: false
}

export default Value;