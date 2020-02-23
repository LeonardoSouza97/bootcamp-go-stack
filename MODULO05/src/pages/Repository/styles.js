import styled from 'styled-components';

export const Loading = styled.div`
  color: #FFF;
  font-size: 30px;
  font-weight:bold;
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

`;

export const Owner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 10px;
    font-size: 30px;
  }

  a{
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  p {
    color: #666;
    margin-top: 5px;
    font-size: 15px;
    line-height: 1.4;
    text-align: center;
    justify-content: center;
    max-width: 400px;
  }

  img {
    width: 120px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;

  }
`;
