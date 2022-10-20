import React from 'react';
import './index.css';

const ServiceItems = (props) => {
    return (
        <li>
            <div className='items'>
                <div className='descricao'>
                    <h4>{props.nome}</h4>
                    $ {props.valor}
                </div>
                <div className='especf'>
                    <label>{props.profissional}</label>
                    <label> Tempo: {props.minutos} min</label>
                </div>
            </div>
        </li>
    );
}

export default ServiceItems;