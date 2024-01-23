import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout/Checkout';
import Historico from './pages/Historico/Historico';
import Home from './components/home/Home';

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/historico' element={<Historico/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;