import styled from 'styled-components';

const ClickedButton = styled.button`
  background: rgb(197, 203, 213);
  color: rgb(85, 85, 90);
  box-sizing: border-box;
  display: inline-block;
  width: 80%;
  border: none;
  padding: 0 1rem;
  border-radius: 4px;
  margin: 0;
  text-decoration: none;
  font-family: Human BBY Web, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  height: 2.5rem;
  text-align: center;
  vertical-align: middle;
  transition: background 250ms ease-in-out,
              transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

`;

export default ClickedButton;
