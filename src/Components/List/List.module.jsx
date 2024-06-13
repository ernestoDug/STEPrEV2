import styled from "@emotion/styled";
// npm i @emotion/react
// npm i @emotion/styled @emotion/react


export const UlStyle = styled.ul`
display: flex;
width: auto;
flex-flow: row wrap;
justify-content: center;
gap: 15px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; 
  margin: 0 auto;
  background-color: #f7f1f8;
  border-radius: 8px;
  padding: 5px;
 `;

export const LiStyle = styled.li`
display: flex;
flex-direction: column;
max-width: 25%;
justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; 
  background-color: #b6f8ec;
  border-radius: 8px;
  padding: 5px;
 `;


export const DivStyleList = styled.div`
display: flex;
gap: 5px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; 
border-radius: 7px;
border: 1px solid rgb(199, 203, 201);;
margin: 5px auto;
`
export const PeStyleList = styled.p`
  width: 95%;
  border-radius: 3px;
  padding: 0 10px;
  line-height: 35px;
  border-width: 0;
  outline: none;
  background-color: rgb(247, 234, 162);
  font-family: 'Playfair Display';
`

export const SpanStyleList = styled.span`
border-radius: 3px;
  padding: 0 10px;
  line-height: 35px;
  border-width: 0;
  outline: none;
  background-color: rgb(165, 247, 162);
  font-family: 'Playfair Display';
`


UlStyle.displayName = "UlStyle";
DivStyleList.displayName = "DivStyleList";
SpanStyleList.displayName = "SpanStyleList";
PeStyleList.displayName = "PeStyleList";