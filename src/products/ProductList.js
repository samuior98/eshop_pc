import React from 'react';
import Product from './Product.js';

export default class ProductList extends React.Component {

    constructor(props) {
        super(props);
    }


    isVisible = (product) => {
		let matchesName= !this.props.searchkey || product.model.toLowerCase().includes(this.props.searchkey.toLowerCase());
        
		let selectedType= this.props.selectedTypes[product.cpu];
	
		let invalidPrice= 
		    (this.props.minPrice >= 0 && this.props.maxPrice >= this.props.minPrice)
		    &&
		    (product.price < this.props.minPrice || product.price > this.props.maxPrice);

        let invalidRam=
            (this.props.minRam >= 4 && this.props.maxRam >= this.props.minRam)
            &&
            (product.ram < this.props.minRam || product.ram > this.props.maxRam)

		return matchesName && selectedType && (!invalidPrice || this.props.maxPrice==0) && (!invalidRam);	
	}


    func = () => {
        let list= this.props.gamingPc;
        return list.length > 0;
    }


    render() {
        let visible= this.props.products.filter(p=> this.isVisible(p));
        let gampc= this.props.gamingPc.filter(p=> this.isVisible(p));

        return (
            <div id='divProducts'>
                <span className="text-center">
                    <h2>Catalogue</h2> <br/>
                </span>
                
                <div className="d-flex flex-wrap justify-content-center">
                    {visible.length > 0 && !this.func() ? visible.map(p => <Product key={p.id} addToCart={this.props.addToCart} data={p}/>) : (this.func() ? gampc.map(p => <Product key={p.id} addToCart={this.props.addToCart} data={p}/>) : <div></div>)} 
                </div>           
            </div>
        );      
    }

}