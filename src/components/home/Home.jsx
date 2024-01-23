import Navbar from "../navbar/Navbar";
import ProdutoVitrine from "../produtos-vitrine/produtos-vitrine";

function Home () {
    return (
        <>
        <Navbar />
        
        <div className="container text-center">
            <ProdutoVitrine/>
            <ProdutoVitrine/>
            <ProdutoVitrine/>
            <ProdutoVitrine/>
            <ProdutoVitrine/>
            <ProdutoVitrine/>
            <ProdutoVitrine/>
        </div>

        </>
    )
}
export default Home;