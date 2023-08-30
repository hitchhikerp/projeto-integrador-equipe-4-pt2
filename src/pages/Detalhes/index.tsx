import Header from "../../Componentes/Header";
import Titulos from "../../Componentes/TituloSubtitulo";
import Footer from "../../Componentes/Footer";
import PedidoForm from "../../Componentes/FormDetalhes";

export default function Detalhes() {
  return (
    <>
      <Header />
      <Titulos titulo="Pedido #4487867" descricao="Detalhes da solicitação" />
      <PedidoForm />
      <Footer />
    </>
  );
}
