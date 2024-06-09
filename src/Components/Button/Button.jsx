import ButtonCardStyle from './Button.module.css';

// names  import and ad for name className bla-bla.nameClasses from css 
// pay attention on name file module.css

const Button = () => {


  
const showerDouble = (e) => {
    // replacing text on a button
e.target.textContent = 'Bazinga';
// change css +++++++++++++++++++++++++++++++++++++++++++
e.target.style.color = 'white';

}

const showerMono = (e) => {

e.target.style.color = 'red';
    console.log('mono666');
}

return (
    <>
    <button onClick={showerMono} onDoubleClick={showerDouble}  className= {ButtonCardStyle.buttonCards}> click hear</button>
    </>
)
}


export default Button;