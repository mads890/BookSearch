import React, { Component } from 'react';

class SearchBox extends Component {
    handleSubmitSearch = (e) => {
        e.preventDefault();
        this.props.submitSearch;
    }
    render() {
        return (
            <div className="search_box">
                <label htmlFor="search_term"></label>
                <input type="text" name="search_term" id="search_term" onChange={e => this.props.handleSearchTerm(e.target.value)} />
                <button className="search_button" type="submit" onClick={e => this.props.handleSubmitSearch(e)}>Search</button>
            </div>
        );
    }
}

export default SearchBox;