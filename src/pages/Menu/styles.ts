import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
`;

export const Header = styled.header`
  flex-direction: column;
  align-items: end;
  justify-content: center;
  background-color: #ffe8c6;
  padding: 10px;
  width: 5%;
  img {
    width: 50px;
    border-bottom: 2px solid orange;
    padding-bottom: 10px;
  }
  h1 {
    transform-origin: left;
    margin-top: 173px;
    margin-left: 23px;
    transform: rotate(270deg);
    color: #ec6d36;
  }

  @media (max-width: 768px) {
    width: 9%;
  }
  @media (max-width: 415px) {
    width: 20%;
    height: inherit;
  }
`;

export const Categories = styled.div`
  width: 95%;
  .input-div {
    display: flex;
    border: none;
    margin-top: 20px;
    margin-left: 10px;
    .input {
      border-bottom: 2px solid orange;
      padding: 5px;
    }
    input {
      border: none;
      color: #ec6d36;
      font-weight: 700;
    }
    button {
      border: none;
      background-color: #ec6d36;
      padding: 5px 20px;
      font-size: 12px;
      border-radius: 5px;
      color: #fff;
    }
    svg {
      cursor: pointer;
      vertical-align: middle;
      color: #ec6d36;
      margin-left: 15px;
    }
  }

  p {
    font-size: 12px;
    color: gray;
    margin-left: 10px;
    strong {
      color: #ec6d36;
      font-weight: 900;
      font-size: 17px;
      margin-left: 5px;
    }
  }

  .button-div {
    margin: 25px 10px;

    display: grid;
    a {
      text-decoration: none;
      border: 1px solid #ec6d36;
      background: #fff;
      padding: 13px 30px;
      border-radius: 5px;
      color: #ec6d36;
      margin-top: 10px;
      width: 50%;
      text-align: center;
      &:hover {
        background-color: #ec6d36;
        color: #fff;
        transition: background-color 0.2s;
        transition: color 0.2s;
      }
    }
  }
  @media (max-width: 415px) {
    .input-div {
      .input {
        display: flex;
      }
      button {
        font-size: 10px;
        margin-left: -30px;
      }
    }

    .button-div {
      a {
        width: 100%;
      }
    }
  }
`;

export const Footer = styled.div`
  width: 95%;
  background-color: #dddee0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
    margin: 12px 10px;
    height: 20px;
    color: gray;
    text-decoration: none;
  }
  @media (max-width: 415px) {
    width: 100vw;
  }
`;
