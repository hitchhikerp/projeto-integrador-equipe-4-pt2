import Footer from "../../Componentes/Footer";
import Header from "../../Componentes/Header";
import Titulos from "../../Componentes/TituloSubtitulo";
import Formulario from "../../Componentes/FormularioLogin";

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