import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Product extends React.Component {
    
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="p-2">
                <div className="card" style={{width: "18rem", height: "30rem"}}>
                    <div className="d-flex justify-content-center p-1">
                        <img src= {this.props.data.img_url} style={{width: "15rem", height:"18rem"}} alt="Immagine Prodotto"/>
                    </div>
                    
                    <div className="card-body">
                        <h4 className="card-title">
                            {this.props.data.model}
                        </h4>
                        
                        <h6>
                            {this.props.data.gpu == "" ? "Notebook" : "Gaming Notebook"}
                        </h6>
                        
                        <p>
                            RAM {this.props.data.ram} gb, CPU {this.props.data.cpu}{this.props.data.gpu == "" ? "" : ", GPU " + this.props.data.gpu}
                        </p>

                        <span className="p-2">{this.props.data.price}€</span>
                        
                        <input
                            type="button"
                            value="+"
                            className='btn btn-success'
                            tag= {this.props.data.id}
                            onClick={() => this.props.addToCart(this.props.data)}
                        />
                    </div>
                </div>
            </div>
        )
    }

}