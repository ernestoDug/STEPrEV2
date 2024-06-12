import styled from "@emotion/styled";
// npm i @emotion/react
// npm i @emotion/styled @emotion/reactn

export const FormStyle = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 12px;
  margin: 0 auto;

  padding: 20px;
  border-radius: 7px;
  /* градиенто стрички  */
  background: repeating-linear-gradient(
    -30deg,
    #fbf9f8,
    #f7f5f5 8px,
    #97dae6 10px,
    #99c7d6 14px
  );
  max-width: 450px;
  box-shadow: 0px 4px 4px rgba(67, 66, 66, 0.04);
  font-family: "Oswald", sans-serif;
`;

export const InputStyle = styled.input`
  padding: 12px;
  background-color: #abf1d5;
  border-width: 0;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 7px;
`;

export const ButtonStyle = styled.button`
  display: inline-block;
  padding: 5px 10px;
  background-color: #f4afc5;
  margin-left: 12px;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(226, 102, 139, 0.04);

  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 200ms cubic-bezier(0.6, 0, 0.4, 1);
  transition: border 200ms cubic-bezier(0.6, 0, 0.4, 1);
  transition: transform 200ms cubic-bezier(0.6, 0, 0.4, 1);

  :hover,
  :focus {
    color: #f3f2ed;
    border: 2px dashed #aaef91;
    transform: scale(1.1);
    background-image: none;
    background-color: #ed3c9a;
  }
`;

export const TextAreaStyle = styled.textarea`
 background-color: #bbedf3;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(67, 66, 66, 0.04);
  resize: none;
  cursor: pointer;
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
:hover,
:focus
{
  background-color: #eadec8;

}
`

export const DivSelectStyle = styled.select`
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(67, 66, 66, 0.04);
    cursor: pointer;
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
  border: none;

  :hover{
    background-color: #a1f8c5;
  }
`

export const DivWrapStyle = styled.div`

display: flex;
justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(67, 66, 66, 0.04);
  border: 1px solid grey;
`


FormStyle.displayName = "FormStyleStyle";
InputStyle.displayName = "InputStyle";
ButtonStyle.displayName = "ButtonStyle";
TextAreaStyle.displayName = "TextAreaStyle";
DivSelectStyle.displayName ="DivSelectStyle"
