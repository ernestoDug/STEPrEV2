import styled from "@emotion/styled";
// npm i @emotion/react
// npm i @emotion/styled @emotion/react

export const DivCardStyle = styled.div`
  display: flex;
  flex-flow: column wrap;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  max-width: 250px;
  padding: 12px;
  margin-left: 20px;
  text-align: center;
  margin: 0 auto;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;

  :hover {
    transform: scale(1.05);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;}

  
`;

export const CardImgWrappStyle = styled.div`
  flex: 1;
  min-height: 100%;
  max-width: 80%;
  margin: 0 auto;
`;

export const ImgStyle = styled.img`
  max-width: 100%;
  height: 100%;
  max-height: 390px;
  object-fit: cover;
  border-radius: 9px;
  :hover{
    border-radius: 7px;
  }
`;

DivCardStyle.displayName = "DivCardStyle";
CardImgWrappStyle.displayName = "CardImgWrappStyle";
ImgStyle.displayName = "ImgStyle";
