import React from 'react';

const User = (props) => {
    return (
        <div className='user'>
            <div className='avatar'>
                <img src={props.img} alt=''/>
            </div>
            <div className='info'>
                <span>{props.name}</span>
                <span>{props.lastname}</span>
            </div>
        </div>
    )
}

export default User;