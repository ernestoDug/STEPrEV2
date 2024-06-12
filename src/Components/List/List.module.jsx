import styled from "@emotion/styled";
// npm i @emotion/react
// npm i @emotion/styled @emotion/react


export const OlStyle = styled.ol`
  max-width: 500px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; 
  margin: 10px auto;
  background-color: #c3e7f3;
  border-radius: 8px;


  :hover {
  background-color: #ecc4ec;
  }
`;

OlStyle.displayName = "OlStyle";