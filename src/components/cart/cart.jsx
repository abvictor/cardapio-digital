import { useEffect, useState } from 'react';
import { Dock } from 'react-dock'
import ProdutoCart from '../produto-cart/produto-cart';

import './cart.css'
import { useNavigate } from 'react-router-dom';

function Cart() {

    const [show, setShow] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        window.addEventListener('openSideBar', function() {
            setShow(true)
        })    
    }, [])

    return (
            <Dock position='right'
                 isVisible={show}
                 fluid={false}
                 size={420}
                 onVisibleChange={(isVisible) => { setShow(isVisible) }}
            >
                <div className='text-center'>
                    <h1>Meu pedido</h1>
                </div>

                <div className='lista-produtos'>
                    <ProdutoCart />
                    <ProdutoCart />
                    <ProdutoCart />
                    <ProdutoCart />
                    <ProdutoCart />
                    <ProdutoCart />
                </div>

                <div className='footer-cart'>
                    <div className='footer-cart-valor'>
                        <span>Total</span>
                        <span><strong>R$ 250,00</strong></span>
                    </div>

                    <div>
                        <button className='btn-checkout'>Finalizar Pedido</button>
                    </div>
                </div>
            </Dock>
    )
}

export default Cart;