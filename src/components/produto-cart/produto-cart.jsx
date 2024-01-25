import './produto-cart.css'
import foto from '../../assets/hamburguer.png'

function ProdutoCart() {

    return (
        <div className='produto-cart-box'>
            <img src={foto} alt="Imagem do produto no carrinho" />
            
            <div>
                <p className='produto-cart-nome'>Spicy Burguer</p>
                <p className='produto-cart-valor'>R$ 14,90</p>

                <div className='footer-produto-cart'>
                    <div>
                        <button className='btn foooter-produto-btn'>-</button>
                        <span className='foooter-produto-qtd'>01</span>
                        <button className='btn foooter-produto-btn'>+</button>
                    </div>

                    <p  className='text-right foooter-produto-preco'>R$ 30,00</p>
                </div>
            </div>
        </div>
    )
}

export default ProdutoCart;