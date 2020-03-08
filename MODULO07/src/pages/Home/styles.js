import styled from 'styled-components';

import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li{
    display: flex;
    background: #FFF;
    flex-direction: column;
    border-radius: 4px;
    padding: 20px;


  > strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 5px;
  }

  > span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
    }

  }

  button {
    background: #7159c1;
    color: #FFF;
    overflow: hidden;
    border: 0;
    border-radius: 4px;
    margin-top: auto;
    transition: backgroud 0.2s;

    &:hover {
      background: ${darken(0.03, '#7159c1')};
    }

    display:flex;
    align-items: center;

    div{
      display: flex;
      padding: 12px;
      align-items: center;
      background: rgba(0,0,0,0.1);

      svg {
        margin-right: 5px;
      }

    }
    span{
          flex: 1;
          align-items: center;
          font-weight: bold;
        }
  }

  img{
    max-width: 250px;
    align-self: center;
  }
`;
