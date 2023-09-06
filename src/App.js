import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((resposta) => {
        setProdutos(resposta.data);
      });
  }, []);

  function addCarrinho() {
    alert('Adicionado ao carrinho!!!')
  }

  return (
    <>
      <Navbar />
      <div className="capa"><h1>LOJA JJ</h1></div>
      <div className='container'>
        <div className='row'>
          {produtos.map((produto) => {
            return <div className='col-12 col-md-6 col-lg-3'>
              <Card
                titulo={produto.title}
                imagem={produto.image}
                preco={produto.price}
                addCarrinho={addCarrinho}
              />
            </div>
          })}
        </div>
      </div>
    </>
  );
}

export default App;
