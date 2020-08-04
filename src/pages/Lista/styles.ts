import styled from 'styled-components';

export const Header = styled.header`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ec6d36;
  img {
    width: 12%;
  }
  svg {
    cursor: pointer;
    margin-right: 10px;
  }
  a {
    color: #ec6d36;
  }
  @media (max-width: 415px) {
    img {
      width: 35%;
    }
  }
`;

export const Title = styled.div`
  background-color: #ffe8c6;
  text-align: center;
  h2 {
    color: #ec6d36;
    font-weight: 700;
    padding: 10px;
    span {
      color: #4d4d4d;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin: 16px;
    width: 60px;
    box-shadow: 2px 2px 7px 0px #7b7b7b;
    border-radius: 5px;
    cursor: pointer;
    transition: width 0.3s;
    &:hover {
      width: 100px;
    }
  }
`;

export const Carousel = styled.div`
  margin-top: 30px;
  .carousel-title {
    display: flex;
    align-items: center;
    span {
      border-left: 40px solid #ec6d36;
      height: 7px;
    }
    h4 {
      color: #ec6d36;
      font-weight: 700;
      padding-left: 10px;
      position: relative;
    }
    svg {
      margin: 5px;
    }
  }
  .carousel {
    display: flex;
    overflow: auto;
    a {
      text-decoration: none;
    }
  }
  @media (max-width: 415px) {
    .carousel-title {
      span {
        border-left: 30px solid #ec6d36;
      }
    }
  }
`;

export const CarouselCard = styled.div`
  box-shadow: 2px 2px 7px 0px #7b7b7b;
  width: 200px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  .carousel-content {
    text-align: center;
    img {
      display: flex;
      margin: 0 auto;
      width: 150px;
    }
    p {
      color: #ec6d36;
      font-size: 12px;
    }
    h6 {
      font-weight: 800;
      font-size: 14px;
      color: #464646;
      margin: 10px;
    }
    .discount-div {
      background-color: #ec6d36;
      color: #fff;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      h3 {
        font-size: 30px;
        font-weight: 800;
        span {
          font-weight: 100;
          font-size: 12px;
          display: inline-block;
          border-right: 1px solid yellow;
          padding-right: 10px;
          line-height: 13px;
        }
        svg {
          margin-left: 10px;
        }
      }
    }
  }
`;
