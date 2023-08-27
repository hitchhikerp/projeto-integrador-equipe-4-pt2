import Header from "../../Componentes/Header";
import Titulos from "../../Componentes/Titulos";
import Footer from "../../Componentes/Footer";
import PedidoForm from "../../Componentes/PedidoForm";

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
