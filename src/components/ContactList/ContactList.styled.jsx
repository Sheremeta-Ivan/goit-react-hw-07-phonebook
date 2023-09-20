import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border-radius: 4px;
  background-color: rgba(168, 168, 168, 0.6);
  border: 3px solid #80b0f0;
  list-style: none;
`;

export const Item = styled.li`
  background-color: #ffffff;
  border: 3px solid #80b0f0;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #80b0f0;
  transition: all 300ms ease-in;
  &:hover {
    background-color: #ff4a4a;
    border: 3px solid #2d2d2d;
    color: white;
    svg {
      fill: white;
    }
  }
  svg {
    transition: all 300ms ease-in;
    padding-right: 5px;
  }
`;
