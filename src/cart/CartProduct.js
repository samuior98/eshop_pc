import React from 'react';

export default class CartProduct extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="p-1">
                <div>
                    <span>{this.props.data.model} - {this.props.data.price} €</span>
                    
                    <span>
                        <input
                            type="button" 
                            className="m-2 btn btn-danger"
                            tag={this.props.data.id} 
                            value="x"
                            onClick={() => this.props.removeFromCart(this.props.position)}
                        />
                    </span>
                </div>
            </div>
        )
    }

}