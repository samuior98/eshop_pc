import React from 'react';

export default class FilterBar extends React.Component {

    constructor(props) {
        super(props);
    };

  
    render() {
        return (
            <div>
                <b>CPU selection</b> <br/>
                {this.props.cpus.map (cpu =>
                        <div className="p-1 m-1" key={cpu}>
                            <input
                                className="m-2"
                                type= "checkbox" 
                                name= {cpu} 
                                checked= {this.props.selectedTypes[cpu]}
                                onChange= {this.props.handleTypeSelect}
                            />

                            {cpu}
                        </div>
                    )
                }
            </div>

        );
    }



}