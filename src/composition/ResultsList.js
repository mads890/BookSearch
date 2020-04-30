import React, { Component } from 'react';
import ResultsItem from './ResultsItem';

class ResultsList extends Component {
    render() {
        const resultsItems = this.props.results.map()
        return (
            <ul>
                {resultsItems}
            </ul>
        );
    }
}

export default ResultsList;