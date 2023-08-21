import Header from "../../Componentes/Header";
import Titulos from "../../Componentes/Titulos";
import Footer from "../../Componentes/Footer";
import Grafico from "../../Componentes/Grafico";
import { render } from 'react-dom'

export default function Relatorios() {
    return (
        <>
        <Header />
        <Titulos titulo='Relátorios' descricao="Gerados com as informações atualizada dos pedidos"/>
        < Grafico />
        <Footer />
        </>
    )
}

render(<Grafico />, document.getElementById('root'))