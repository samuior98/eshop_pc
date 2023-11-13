import React from 'react';
import CartProduct from './CartProduct';

export default class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {show:true};
    }


    toggle = () => {
        this.setState({"show": !this.state.show});
    }


    render() {
        return (
            <div id='divCart'>
                <h2 onClick={this.toggle}>My cart</h2> 
                
                
                {this.state.show && 
                    <div>
                        {this.props.selectedProducts.map((product,index) => <CartProduct key={index} position={index} removeFromCart={this.props.removeFromCart} data={product}/>)}
                    </div>
                }
                
                {this.props.selectedProducts && this.props.selectedProducts.length > 0 && <input type="button" value="Send order" className='btn btn-primary' onClick={this.props.sendOrder}/>}
            </div>
        );
    }

}