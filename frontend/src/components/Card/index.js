import React, { useState, useCallback, useEffect } from 'react'
import api from '../../services/api';

import ServiceItems from '../ServicesItems'
import './index.css';


const Card = () => {
    const [services, setServices] = useState([])

    const ongetServices = useCallback(async () => {
        try {
            const response = await api.get('/user/services');
            setServices(response.data)
        } finally { }
    }, [])

    console.log(services)

    useEffect(() => {
        ongetServices()
    }, [ongetServices])

    const content = (
        services.map(data => <ServiceItems
            key={data.id}
            nome={data.nome}
            valor={data.valor}
            profissional={data.profissional}
            minutos={data.minutos} />))

    return (
        <div className='card'>
            <ul className="list"> {content}</ul>
        </div>

    );
}

export default Card;