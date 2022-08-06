import { useState, useEffect } from "react";

//4- CUSTOM HOOK
//
export const useFetch = (url) => {
    //Criando esse useState para receber os dados da API. 
    const [data, setData] = useState(null) //ta como NULL pois não sabemos ainda quais são os dados que iremos receber.

    //5- REFATORANDO POST
    const [config, setConfig] = useState(null) //esse State vai configurar o método que vai usado, os cabeçalhos e etc.
    const [method, setMethod] = useState(null) //esse state vai indicar qual method estaremos usando (GET ou POST).
    const [callFetch, setCallFetch] = useState(false) //vai servir como dependência do useEffect.

    const httpConfig = (data, method) => {

        if(method === "POST") {

            setConfig({
                method,
                Headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            })

            setMethod(method);

        }

    }

    //Fazendo requisição á API.
    useEffect(() => {
        async function fetchData() {

            const res = await fetch(url);
        
            const json = await res.json();

            setData(json);
        }

        fetchData();
    }, [url, callFetch])

    //5- REFATORANDO POST
    useEffect(() => {
        const httpRequest = async () => {

            if (method === "POST") {
                
                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);

                const json = await res.json();

                setCallFetch(json);

            }

        }

        httpRequest();

    }, [config, method, url]);

    return { data,  httpConfig};

}