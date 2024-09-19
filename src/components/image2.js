import React,{Component} from 'react';
import images1 from './img/ribbon.png';
function Image() {
        var ProfileImageCss = {
        marginLeft: 20,
        marginTop: 10,
        width: 150,
        height: 15,
        borderRadius: 10
        }
        return(
              
                <img style={ProfileImageCss} src={images1} />
        );
}

export default Image;