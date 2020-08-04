import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { FiChevronsDown, FiX } from 'react-icons/fi';
import { Collapse } from 'react-collapse';
import ps4 from '../../assets/ps4.jpg';
import { Content, Description, SvgExit } from './styles';

interface CollapseInterface {
  isOpened: boolean;
}

const Produto: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <SvgExit>
        <Link to="/lista">
          <FiX size={30} />
        </Link>
      </SvgExit>

      <Content>
        <img src={ps4} alt="ps4" />
        <Description>
          <div className="discription-text">
            <div className="text">
              <h5>Videogame para curtir com os amigos!</h5>
              <p>
                O ps4 é centrado nos jogadores, possibilitando que eles joguem
                quando, onde e como quiserem, possibilita que os maiores
                desenvolvedores de jogos do mundo deem asas à sua criatividade.
              </p>
            </div>
            <div className="discount">
              <h1>
                7 <span>% OFF</span>
              </h1>
            </div>
          </div>
          <FiChevronsDown size={30} onClick={toggleCollapse} />
          <Collapse isOpened={isOpen}>
            <p className="collapse-text">
              O ps4 é centrado nos jogadores, possibilitando que eles joguem
              quando, onde e como quiserem, possibilita que os maiores
              desenvolvedores de jogos do mundo deem asas à sua criatividade.
            </p>
          </Collapse>
          <button type="button">Avançar</button>
          <p className="alert-internet">
            *Para acessar o site do parceiro é necessário estar conectado à
            internet.
          </p>
        </Description>
      </Content>
    </>
  );
};

export default Produto;
