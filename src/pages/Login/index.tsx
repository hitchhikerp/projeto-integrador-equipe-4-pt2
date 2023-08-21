import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import Titulos from "../../Componentes/Titulos";
import Formulario from "../../Componentes/Formulario";

export default function Login() {
    return (
        <>
        <Header visible={false}/>
        <Titulos descricao='Para acessar a área do funcionário entre com suas informações de acesso'/>
        <Formulario /> 
        <Footer />
        </>
    )
}