import React from 'react';
import './styles.css';
import User from '../User'
import Value from '../Value'

const Card = ({data}) => {
    return (
        <div className='card-container'>
            <User
                img={data.img}
                name={data.name}
                lastname={data.lastname}
            />
            <div className='values'>
            {
                data.values.map((value, index)=>{
                    return (
                        <Value
                            main={value.main}
                            secondary={value.secondary}
                            warm={value.warm}
                            key={index}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}

export default Card;