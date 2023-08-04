import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import Panel from "../../Componentes/Panel";
import Titulos from "../../Componentes/Titulos";


export default function PanelAdm() {
    return (
        <>
            <Header />
            <Titulos
                titulo="Painel de Controle"
                descricao="Área exclusiva para funcionários."
            />
            <Panel />
            <Footer />
        </>
    );
}