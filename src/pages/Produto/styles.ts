import styled from 'styled-components';

export const SvgExit = styled.div`
  svg {
    float: right;
    margin: 15px;
    color: #ec6d36;
  }
`;

export const Content = styled.div`
  display: flex;
  @media (max-width: 415px) {
    display: block;
    img {
      width: 100%;
    }
  }
`;

export const Description = styled.div`
  margin-top: 10%;
  .discription-text {
    display: flex;
    align-items: center;
    .text {
      width: 50%;
      h5 {
        font-weight: 700;
        font-size: 30px;
        color: #464646;
      }
    }
    .discount {
      background-color: #ec6d36;
      border-left: 4px solid #9c9c9c;
      padding: 0px 15px;
      color: #fff;
      h1 {
        font-weight: 900;
        span {
          font-weight: 100;
          font-size: 20px;
        }
      }
    }
  }
  svg {
    background: #ec6d36;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
  }
  .collapse-text {
    width: 50%;
  }
  button {
    border: none;
    color: yellow;
    padding: 15px 30px;
    background-color: #ec6d36;
    width: 50%;
    border-radius: 5px;
    margin-top: 15px;
  }
  .alert-internet {
    margin-top: 30px;
    color: gray;
  }
  @media (max-width: 415px) {
    margin-left: 10px;
    .discription-text {
      justify-content: space-between;
      .text {
        width: 60%;
      }
    }
    button {
      margin: 10px;
      width: 90%;
    }
    .alert-internet {
      margin-botom: 20px;
    }
  }
`;
