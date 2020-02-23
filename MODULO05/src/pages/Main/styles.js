import styled, { keyframes, css } from 'styled-components'


export const Container = styled.div`
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

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }

`;

export const Form = styled.form`

margin-top: 30px;
display: flex;
align-content: center;

input {
  display: flex;
  border: 1px solid ${props => props.error ? 'red' : '#eee'};
  flex: 1;
  flex-direction: row;
  padding: 20px 15px;
  font-size: 16px;
  border-radius: 4px;
}
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading
}))`
  background: #71c;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-items: center;
  justify-content: center;

  &[disabled]{
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props => props.loading && css`
    svg{
      animation: ${rotate} 2s linear infinite;
    }
  `}

`;

export const List = styled.ul`
  list-style: none;
  margin-top:30px;

  li{
    padding: 15px 0;
    text-decoration: none;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

`
