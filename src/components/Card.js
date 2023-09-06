import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card({ titulo, imagem, preco, addCarrinho }) {

    return (
        <div className="card">
            <img src={imagem} className="card-img-top" alt="..." />
            <div class="card-body">
                <h6 class="card-title">{titulo}</h6>
                <p class="card-text">R${preco}</p>
            </div>
            <div className='card-footer text-center'>
                <a class="btn btn-primary" onClick={addCarrinho}>Adicionar ao carrinho</a>
            </div>
        </div>
    );
}