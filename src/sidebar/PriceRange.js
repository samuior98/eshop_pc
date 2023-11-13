import React from 'react';

export default class PriceRange extends React.Component {

    constructor(props) {
        super(props);
    };


    render() {
        return (
          <div>
            <div>
                <b>Insert min price</b> <br/>
                <input type="number"
                    placeholder="min price" 
                    onChange={this.props.handleMinPrice}
                    name="casella prezzo min"
                    value={this.props.minPrice}
                    step= "50"
                />
            </div>   
            
            <div>
                <b>Insert max price</b> <br/>
                <input type="number"
                    placeholder="max price" 
                    onChange={this.props.handleMaxPrice}
                    value={this.props.maxPrice}
                    step="50"
                />
            </div>
        </div>
        );
    }

}