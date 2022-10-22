import React, { useState, useCallback, useEffect } from 'react'
import api from '../../services/api';
import Footer from '../../components/Footer';
import './index.css'

const Home = () => {

    const [services, setServices] = useState([])
    const [valortotal, setvalortotal] = useState()

    const ongetServices = useCallback(async () => {
        try {
            const response = await api.get('/user/services');
            setServices(response.data)
        } finally { }
    }, [])

    const SumServices = async () => {
        const filterValues = []
        const checks = document.querySelectorAll('input:checked');

        checks.forEach(function (data) {
            var valorInicial = 0;

            if (data.checked) {
                var valor = data.value
                valorInicial = Number(valor)
                filterValues.push(valorInicial)
            }
        });
        const sum = filterValues.reduce((partialSum, x) => partialSum + x, 0);
        try {
            const response = await api.post('/insert-services', (services.map(data =>
            ({
                nomeServico: data.nome,
                valor: data.valor,
                profissional: data.profissional,
                comissao: data.comissao,
                minutos: data.minutos
            })
            )));
            if (response)
                console.log('ok')
        } catch (error) { }
        setvalortotal(sum)

        return sum
    };

    useEffect(() => {
        ongetServices()
    }, [ongetServices])

    return (
        <div className='home'>
            {services.map(data =>
                <div className='card' key={data.id}>
                    <div className='items'>
                        <ul className="list">
                            <li >
                                <div className='descricao'>
                                    <h4>{data.nome}</h4>
                                    $ {data.valor}
                                </div>
                                <div className='especf'>
                                    <label>{data.profissional}</label>
                                    <label> Tempo: {data.minutos} min</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <input type="checkbox" value={data.valor} onClick={() => (SumServices())} />
                </div>

            )}
            <Footer sumValues={valortotal} />
        </div>
    )
}

export default Home
