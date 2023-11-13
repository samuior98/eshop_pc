import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
    };


    render() {
        return (
            <div id='searchBar'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <span className="navbar-brand" href="#">PC Shop</span>
                        <div id="navbarSupportedContent">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="text" placeholder="Insert notebook model" aria-label="Search" onChange={this.props.handleSearch}/>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}