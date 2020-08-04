import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiSearch,
  FiMenu,
  FiYoutube,
  FiHeadphones,
  FiShoppingCart,
} from 'react-icons/fi';
import { Header, Title, Cards, Carousel, CarouselCard } from './styles';

import OiVantagens from '../../assets/oivantagens-logo.png';
import Smartphone from '../../assets/smartphone.jpg';
import Tablet from '../../assets/tablet.jpg';
import ps4 from '../../assets/ps4.jpg';
import Table from '../../assets/table.jpg';

const Lista: React.FC = () => {
  const firstCarousel = [];

  for (let i = 0; i < 10; i += 1) {
    firstCarousel.push(
      <Link to="/produto" key={i}>
        <CarouselCard>
          <div className="carousel-content">
            <img src={Tablet} alt="tablet" />
            <p>AMAZON</p>
            <h6>3 meses de Kindle Unlimited!</h6>
            <div className="discount-div">
              <h3>
                97
                <span>
                  %
                  <br />
                  OFF
                </span>
                <FiShoppingCart size={22} />
              </h3>
            </div>
          </div>
        </CarouselCard>
      </Link>,
    );
  }

  return (
    <>
      <Header>
        <img src={OiVantagens} alt="Oi Vantagens" />
        <div>
          <FiSearch size={36} />
          <Link to="/">
            <FiMenu size={36} />
          </Link>
        </div>
      </Header>

      <Title>
        <h2>
          Aproveite agora todas as
          <br />
          vantagens do seu
          <span> Oi Controle</span>
        </h2>
      </Title>

      <Cards>
        <img src={Smartphone} alt="smartphone" />
        <img src={Tablet} alt="tablet" />
        <img src={ps4} alt="ps4" />
        <img src={Table} alt="table" />
      </Cards>

      <Carousel>
        <div className="carousel-title">
          <span />
          <h4>CURTINDO O TEMPO LIVRE</h4>
          <FiYoutube size={28} />
          <FiHeadphones size={28} />
        </div>
        <div className="carousel">
          <Link to="/produto">
            <CarouselCard>
              <div className="carousel-content">
                <img src={Tablet} alt="tablet" />
                <p>AMAZON</p>
                <h6>3 meses de Kindle Unlimited!</h6>
                <div className="discount-div">
                  <h3>
                    97
                    <span>
                      %
                      <br />
                      OFF
                    </span>
                    <FiShoppingCart size={22} />
                  </h3>
                </div>
              </div>
            </CarouselCard>
          </Link>
          <Link to="/produto">
            <CarouselCard>
              <div className="carousel-content">
                <img src={Tablet} alt="tablet" />
                <p>AMAZON</p>
                <h6>3 meses de Kindle Unlimited!</h6>
                <div className="discount-div">
                  <h3>
                    97
                    <span>
                      %
                      <br />
                      OFF
                    </span>
                    <FiShoppingCart size={22} />
                  </h3>
                </div>
              </div>
            </CarouselCard>
          </Link>
          <Link to="/produto">
            <CarouselCard>
              <div className="carousel-content">
                <img src={Tablet} alt="tablet" />
                <p>AMAZON</p>
                <h6>3 meses de Kindle Unlimited!</h6>
                <div className="discount-div">
                  <h3>
                    97
                    <span>
                      %
                      <br />
                      OFF
                    </span>
                    <FiShoppingCart size={22} />
                  </h3>
                </div>
              </div>
            </CarouselCard>
          </Link>
          <Link to="/produto">
            <CarouselCard>
              <div className="carousel-content">
                <img src={Tablet} alt="tablet" />
                <p>AMAZON</p>
                <h6>3 meses de Kindle Unlimited!</h6>
                <div className="discount-div">
                  <h3>
                    97
                    <span>
                      %
                      <br />
                      OFF
                    </span>
                    <FiShoppingCart size={22} />
                  </h3>
                </div>
              </div>
            </CarouselCard>
          </Link>
          <Link to="/produto">
            <CarouselCard>
              <div className="carousel-content">
                <img src={Tablet} alt="tablet" />
                <p>AMAZON</p>
                <h6>3 meses de Kindle Unlimited!</h6>
                <div className="discount-div">
                  <h3>
                    97
                    <span>
                      %
                      <br />
                      OFF
                    </span>
                    <FiShoppingCart size={22} />
                  </h3>
                </div>
              </div>
            </CarouselCard>
          </Link>
          <Link to="/produto">
            <CarouselCard>
              <div className="carousel-content">
                <img src={Tablet} alt="tablet" />
                <p>AMAZON</p>
                <h6>3 meses de Kindle Unlimited!</h6>
                <div className="discount-div">
                  <h3>
                    97
                    <span>
                      %
                      <br />
                      OFF
                    </span>
                    <FiShoppingCart size={22} />
                  </h3>
                </div>
              </div>
            </CarouselCard>
          </Link>
          <Link to="/produto">
            <CarouselCard>
              <div className="carousel-content">
                <img src={Tablet} alt="tablet" />
                <p>AMAZON</p>
                <h6>3 meses de Kindle Unlimited!</h6>
                <div className="discount-div">
                  <h3>
                    97
                    <span>
                      %
                      <br />
                      OFF
                    </span>
                    <FiShoppingCart size={22} />
                  </h3>
                </div>
              </div>
            </CarouselCard>
          </Link>
        </div>
      </Carousel>
      <Carousel>
        <div className="carousel-title">
          <span />
          <h4>PRECISANDO DE ALGO DE MERCADO?</h4>
          <FiShoppingCart size={28} />
        </div>
        {/* Array com cards do carrossel */}
        <div className="carousel">{firstCarousel}</div>
      </Carousel>
    </>
  );
};

export default Lista;
