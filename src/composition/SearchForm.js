import React, { Component } from 'react';
import SearchBox from './SearchBox';
import FilterOptions from './FilterOptions';

class SearchForm extends Component {
    render() {
        return (
            <form>
                <SearchBox submitSearch={this.props.submitSearch} handleSearchTerm={this.props.handleSearchTerm}/>
                <FilterOptions filterPrint={this.props.filterPrint} filterBook={this.props.filterBook} />
            </form>
        );
    }
}

export default SearchForm;