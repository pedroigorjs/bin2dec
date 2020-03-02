import styled from 'styled-components';

export const Container = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  color: #000d56;
`;

export const Form = styled.form`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  position: relative;

  button {
    width: 15%;
    border-radius: 4px;
    border: none;
    padding: 12px 10px;
    background-color: #273377;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 40%;
  padding: 12px 10px;
  border-radius: 4px;
  border: none;
  background-color: hsla(220, 12%, 95%);
`;

export const Message = styled.span`
  position: absolute;
  bottom: -2rem;
  left: 0;
  color: #d50000;
  border-left: 3px solid #d50000;
  padding: 0 10px;
`;
