import React from 'react';
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import { Content, Header, Categories, Footer } from './styles';
import OiLaranja from '../../assets/oi-logo-laranja.png';

const Menu: React.FC = () => {
  return (
    <>
      <Content>
        <Header>
          <img src={OiLaranja} alt="Logo Oi" />
          <h1>CATEGORIAS</h1>
        </Header>

        <Categories>
          <div className="input-div">
            <div className="input">
              <input type="text" />
              <button type="button">SAIR</button>
            </div>

            <FiX size={36} />
          </div>
          <p>
            SEU SALDO ATUAL = R$
            <strong>0</strong>
          </p>

          <div className="button-div">
            <Link to="/lista">Outras Ofertas</Link>
            <Link to="/lista">Gastronomia</Link>
            <Link to="/lista">Entretenimento</Link>
            <Link to="/lista">Beleza e Saúde</Link>
            <Link to="/lista">Viagens</Link>
            <Link to="/lista">Pet Shop</Link>
            <Link to="/lista">Eletrônicos</Link>
            <Link to="/lista">Roupas e Calçados</Link>
            <Link to="/lista">Games</Link>
            <Link to="/lista">Presentes e Decoração</Link>
            <Link to="/lista">Para casa</Link>
            <Link to="/lista">Livros e Revistas</Link>
            <Link to="/lista">Eletrodomésticos e Eletroportáteis</Link>
            <Link to="/lista">Móveis</Link>
            <Link to="/lista">Mercado</Link>
          </div>

          <Footer>
            <a href="/#">Meus Interesses</a>
            <a href="/#">Perguntas Frequentes</a>
            <a href="/#">Termos de Uso</a>
            <a href="/#">Fale Conosco</a>
          </Footer>
        </Categories>
      </Content>
    </>
  );
};

export default Menu;
