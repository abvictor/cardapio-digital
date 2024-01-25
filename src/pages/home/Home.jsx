import Navbar from "../../components/navbar/Navbar";
import ProdutoVitrine from "../../components/produtos-vitrine/produtos-vitrine";

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