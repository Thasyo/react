import './App.css';

import {useState, useEffect} from "react";

const url = "http://localhost:3000/product" //url para acessar o nosso bando de dados

function App() {
  const [products, setProducts] = useState([]) //useState para salvar os dados e manipular com o set.

  //criando os useStates para os inputs que serão criados.
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  //1- resgatando dados
  useEffect(() => { //Utilizando o useEffect para acessar o banco de dados somente uma vez.
    async function fetchData() {

      const res = await fetch(url); //Acessando e recebendo  os dados da url do banco de dados
      
      const data = await res.json(); //Transformando o json(string) para object, afim de manipular os dados np nosso front.

      setProducts(data); //Recebendo os dados do json e preenchendo o array vazio do products com o setProducts.
    }

    fetchData(); //Fazendo a chamada da função normalmente.
  }, []);

  //2- adicionando dados 
  const handleSubmit = (e) => {
    e.preventDefault()

  //Object criado para armazenar dados dos inputs para o backend.
  const product = {
    name,
    price,
  }

  console.log(product)

  //Adicionando dados no banco de dados por meio do metodo POST no json;
  const res = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application"
    },
    body: JSON.stringify(product),
  });
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>

      {/* Exibindo os dados no front com a função .map() */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>

      {/* Criando formulário para adiconar novos dados dinâmicamente com o metodo POST. */}
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
          </label>
          <input type="submit" value="Criar"/>
        </form>
      </div>
    </div>
  );
}

export default App;
