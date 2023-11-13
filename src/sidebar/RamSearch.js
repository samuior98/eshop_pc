import React from 'react';

export default class RamSearch extends React.Component {

    constructor(props) {
        super(props);
    };


    render() {
        return (
          <div>
            <div>
                <b>Insert min ram</b><br/>
                <input type="number"
                    placeholder="min ram" 
                    onChange={this.props.handleMinRam}
                    name="casella ram min"
                    value={this.props.minRam}
                    step="4"
                    min="8"
                    max="32"
                />
            </div>   
            
            <div>
                <b>Insert max ram</b><br/>
                <input type="number"
                    placeholder="max ram" 
                    onChange={this.props.handleMaxRam}
                    value={this.props.maxRam}
                    step="4"
                    min="8"
                    max="32"
                />
            </div>
        </div>
        );
    }

}