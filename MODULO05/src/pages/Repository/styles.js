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

export const IssueList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

  li {

    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

  & + li {
    margin-top: 10px;
  }

  img {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;
      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }
      p {
        font-size: 10px;
        margin-top: 5px;
        color: #999;
      }

      span {
        color: #eee;
        background: #999;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        margin-left: 15px;
        padding: 3px 4px;
      }
    }

  }
  }

`;
