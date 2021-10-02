import logo from './logo.svg';
import './App.css';
import vid from './src1/VALO.mp4';
import raze from './src1/Raze.png';
import reyna from './src1/Reyna.png';
import sage from './src1/Sage.png';
import pho from './src1/pho.png';
import jett from './src1/jett.png';




const style1 = {  
  display: 'block'  
}

const style2 = {
  float: "center",  
  fontSize: '9pt',  
  textAlign: 'center',  
  width: '30%',  
  marginRight: '1.6666665%',  
  marginLeft: '1.6666665%',  
  marginTop: '1%',  
  marginBottom: '0.5em',  
} 

const stylee = {
  
  height: 700,
  width: 500,
}

function App() {
  return (
    <>
    
    <div style={{backgroundColor: '#E03528', backgroundcolor:"red", border: "solid 1px black", maxwidth: "100vw" }}>
      <h1 style={{textAlign:  "center",}} className="title red">My agents tier list</h1>
      <br />
     
      <div style={style1}>
      <h2 style={{fontSize:"500%"}}>S: </h2>

      <img style={style2}  className="image" import="./imageInSrc.jpg" ></img>
      <img style ={ stylee } src={raze} />  
      <img style ={ stylee } src={reyna} />  
      <img style ={ stylee } src={sage} />  
      <h2 style={{fontSize:"500%"}}>A: </h2>
      <img style ={ stylee } src={pho} />  
      <img style ={ stylee } src={jett} />  





      <h3 style={{textAlign:  "center",}}> </h3>


         </div>
<br/>
<video style={{paddingLeft:380}} width="720" height="450" controls>
    <source  src={vid} type="video/mp4" />
    </video>
      

    </div>

</>);
}

export default App;
