import styled from "@emotion/styled";
// npm i @emotion/react
// npm i @emotion/styled @emotion/react

/* for old brauzers support */

// @supports (display: grid) {
//   .grid {
//     display: grid;
//   }
// }

export const UlStyle = styled.ul`
display: grid;
  grid-template-columns: repeat(3, 450px);
  grid-gap: 15px;
  align-items: center;
  justify-content: center;

width: auto;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; 
  margin: 0 auto;
  background-color: #f7f1f8;
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
export const LiStyle = styled.li`
position: relative;

display: flex;
flex-flow: column nowrap;
max-width: 60%;
justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; 
  border-radius: 9px 35px 9px 9px;
  padding: 5px;
  transition: all 5s ease-in 5s;

 `;


export const PeStyleList = styled.p`
display: flex;
align-items: center;
  width: 90%;
  border-radius: 3px;
  text-align: center;
  padding: 2px;
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