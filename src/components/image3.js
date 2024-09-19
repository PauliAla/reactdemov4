import React,{Component} from 'react';
import images1 from './img/finland-flag.jpg';
function Image() {
        var ProfileImageCss = {
        marginLeft: 20,
        marginTop: 10,
        width: 150,
        height: 90,
        borderRadius: 10,
        border: '2px solid rgba(0,0,0,255)'
        }
        return(
              
                <img style={ProfileImageCss} src={images1} />
        );
}

export default Image;