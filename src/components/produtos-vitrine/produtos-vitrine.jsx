import "./produto-vitrine.css"

function ProdutoVitrine(){
    return (
        <div className="produto-box text-center">
            <img src={""} alt="Imagem do hambúrger" />
            
            <div>
                <h2 className="prod-vitrine-descricao">Spicy Burguer</h2> 
                <p className="prod-vitrine-preco">R$ 18,90</p>
            </div>

            <div>
                <button className="btn btn-cart">
                    <img src={""} className="icon"/>
                    Adiconar
                </button>
            </div>
        </div>
    )
}   

export default ProdutoVitrine;