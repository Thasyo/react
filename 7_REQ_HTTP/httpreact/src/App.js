import './App.css';

import {useState, useEffect} from "react";

//4- custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {

  //utilizando o useState para salvar os dados da API e manipulá-los.
  const [products, setProducts] = useState([])

  //4- custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url)

  //Criando os useStates dos input do form.
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  //1- resgatando dados / sem o custom hook
  /*useEffect(() =>{
    async function fetchData() {

      const res = await fetch(url); //Essa linha de código vai fazer a requisição dos dados, no formato json.
      
      const data = await res.json(); //Essa linha de código vai transformar os dados de json para object, afim de manipula-los no template.
    
      setProducts(data); //Recebendo e salvando os dados recebidos.
    }
    fetchData(); //fazendo a chamada da função
  }, [])*/

  //2- Adicionando dados na API.
  const handleSubmit = async (e) => {
    e.preventDefault() //para não recarregar a página ao criar o produto.

    //Criando um objeto para organizar os dados para enviar para a API.
    const product = {
      name,
      price,
    };
    /*console.log(product)

    //Adicionando dados á API.
    const res = await fetch(url, {
      method: "POST", //POST: adiciona dados na API/Banco de Dados.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });
    console.log(res)

    //3- Carregamento dinâmico.
    const addProduct = await res.json(); //Transformando json em object novamente.

    setProducts((prevProducts) => [...prevProducts, addProduct]) //Tá fazendo a junção dos dados já escritos com os novos dados recebidos do form.
    */

    //5- refatorando POST
    httpConfig(product, "POST")
    //Limpando dados dos inputs após o envio dos mesmos.
    setName("")
    setPrice("")
  }; 

  //8- Desafio 06: removendo items da lista de produtos
  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6- loading */}
      {loading && <p>Carregando dados...</p>}
      {/* 7- Tratamento de erro */}
      {error && <p>{error}</p>}
      {/* Exibindo os dados recebidos da API no front. */}
      {!error && (<ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} | <button onClick={() => handleRemove(product.id)}>Delete</button>
          </li>
        ))}
      </ul>)}

      {/* Criando formulário para adicionar dados á API */}
      <div className="add-products">
        <form onSubmit={handleSubmit} className="formulario">
          <label>
            Name: 
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço: 
            <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {/* 7- state de loading no POST */}
          {loading && <input type="submit" disabled value="Aguarde..."/>}
          {!loading && <input type="submit" value="Criar"/>}
        </form>
      </div>
    </div>
  );
}

export default App;
