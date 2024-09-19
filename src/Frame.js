import React from 'react';
import './App.css';
import { FaThumbsUp, FaThumbsDown, FaShare } from 'react-icons/fa';

import Image from './components/Image';
import Image2 from './components/image2';
import Image3 from './components/image3';
//import ResponsiveAppBar from './components/ResponsiveAppBar';
import Yellow from './components/Yellow';
function Name() {
  var cssStyle = {
    fontSize: 20,
    fontFamily: "Arial",
    margin: 5,
    paddingTop: 20,
    paddingLeft: 25
  }
  return(
    <h1 style={cssStyle}>Pauli Alakylmänen</h1>
  );
}
function Info() {
  var infoStyle = {
    fontSize: 20,
    fontFamily: "Arial",
    margin: 1,
    paddingTop: 1,
    paddingLeft: 25
  }
  return(
    <h1 style={infoStyle}>Henkilötunnus: 191280-183F</h1>
  );
}
function Connection() {
  return(
    <div>
     <FaThumbsUp style={{color: 'green', fontSize: '15px', margin:22 }} />  <FaThumbsDown style={{color: 'red', fontSize: '15px', margin:22 }}/>
     <FaShare style={{color: 'blue', fontSize: '15px', margin:22 }}/>
    </div>
  );
}
function Frame () {
    var frameCss = {
      height: 450,
      width: 200,
      backgroundColor: '#FFF',
      border: "2 solid red",
      WebKitFilter: "drop-shadow(0 px 0px 5px #555)",
      filter: "drop-shadow(0px 0px 5px #555)"
    }
    return (
    <div style={frameCss}>
        <Name />
        <Image />     
        <Info />
        <Image3 />
        <Image2 />
       
        
    </div>
  );
}


export default Frame;
