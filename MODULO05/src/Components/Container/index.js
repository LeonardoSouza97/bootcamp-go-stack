import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0,0,0,0);
  padding: 30px;
  margin: 80px auto;

  h1 {
    color: #222
    font-size 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg{
      margin-right: 15px;
    }
  }
`;

export default Container;
