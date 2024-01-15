import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom';

function Detail() {
    const { id } = useParams();
    const [model, setModel] = useState([])
    useEffect(() => {
        const FetchDetail = async () => {
            const response = await fetch("http://localhost:3100/services/" + id)
            const api = await response.json()
            setModel(api);
            // console.log(api)
        }
        FetchDetail()
    })

    return (
        <div>
            <Helmet>
                <title>detail</title>
            </Helmet>
            <div>
                    <img src={model.image} alt="" />
                </div>
                <div>
                    <h3>{model.name}</h3>
                </div>
                <div>
                    <p>{model.title}</p>
                </div>
                <div/>
        </div>
    )
}

export default Detail