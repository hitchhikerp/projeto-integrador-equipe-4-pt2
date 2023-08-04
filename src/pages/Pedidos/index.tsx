import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import Painel from "../../Componentes/Painel";
import Titulos from "../../Componentes/Titulos";


export default function Pedidos() {
    return (
        <>
            <Header />
            <Titulos
                titulo="Painel de Controle"
                descricao="Área exclusiva para funcionários."
            />
            <Painel />
            <Footer />
        </>
    );
}