import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: rgba(168, 168, 168, 0.6);
  border: 3px solid #80b0f0;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-weight: 500;
  color: #010101;
  font-size: 20px;
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 8px 12px;
  font: inherit;
  border-radius: 4px;
  border: 3px solid #80b0f0;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #80b0f0;
  color: #80b0f0;
  font-size: 20px;
  transition: all 300ms ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #80b0f0;
    color: #fff;
    svg {
      fill: #fff;
    }
  }
  svg {
    fill: #80b0f0;
    transition: fill 300ms ease-in;
  }
`;
