import React, { Component } from 'react';
import ResultsItem from './ResultsItem';

class ResultsList extends Component {
    render() {
        const resultsItems = this.props.books.map((item) => {
            return (
            <ResultsItem item={item} id={item.id} key={item.id} />
            )
        })
        return (
            <ul>
                {resultsItems}
            </ul>
        );
    }
}

export default ResultsList;