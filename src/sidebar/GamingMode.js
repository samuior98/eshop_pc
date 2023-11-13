import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './GamingMode.css';
import Product from '../products/Product';

export default class GamingMode extends React.Component {

    constructor(props) {
        super(props);
    }
    
    
    /*changeCss = () => {
        let b= document.getElementById("button");
        if(b.value  === "GAMING MODE") {
            b.value= "ALL"
            b.style.backgroundColor= "red";
            document.body.style.backgroundColor= "#90f545";

            
        }
        
        else {
            b.value= "GAMING MODE"
            b.style.backgroundColor= "#198754";
            document.body.style.backgroundColor= "white";
        }
    }
    */

    
    render () {
        return (
            <div>
                <button id="button" className="btn btn-success" onClick={this.props.changeCss}>GAMING MODE</button>
            </div>
        );
    }

}