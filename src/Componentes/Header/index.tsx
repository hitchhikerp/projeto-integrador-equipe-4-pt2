import Foguete from "../../assets/Velocity-logo.png";
import { Link } from "react-router-dom";
import { HeaderStyled, Menu } from "./style";

interface MenuProps {
  visible?: boolean;
}

export default function Header({ visible = true }: MenuProps) {
  return (
    <>
      <HeaderStyled>
        <div>
          <img src={Foguete} alt=""></img>
          {visible && (
            <Menu>
              <ul>
                <li>
                  <Link to="/painel">Início</Link>
                </li>
                <li>
                  <Link to="/servicos">Serviços</Link>
                </li>
                <li>
                  <Link to="/relatorios">Relátorios</Link>
                </li>
              </ul>
            </Menu>
          )}
        </div>
      </HeaderStyled>
    </>
  );
}
