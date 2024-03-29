import foto from "../../assets/hamburguer.png";
import bag from "../../assets/bag-black.png";


import "./produto-vitrine.css"

function ProdutoVitrine(){
    return (
        <div className="produto-box text-center">
            <img src={foto} alt="Foto" />
            
            <div>
                <h2>Spicy Burguer</h2>
                <p className="prod-vitrine-descricao">Hamburguer de 250g, queijo, tomate, alface e cebola</p>
                <p className="prod-vitrine-preco">R$ 18,90</p>
            </div>

            <div>
                <button className="btn btn-cart">
                    <img src={bag} className="icon" alt='bag icon' />
                    Adicionar
                </button>
            </div>
        </div>
    )
}   

export default ProdutoVitrine;