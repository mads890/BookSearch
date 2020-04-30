import React, { Component } from 'react';
import ItemBody from './ItemBody';

class ResultsItem extends Component {
    render() {
        const title = this.props.item.volumeInfo.title;
        const author = this.props.item.volumeInfo.authors[0];
        const price = this.props.item.saleInfo.saleability === 'FREE'
            ? 'Free'
            : this.props.item.saleInfo.listPrice.amount;
        const description = this.props.item.volumeInfo.description
        const coverArt = this.props.item.volumeInfo.imageLinks.thumbnail;
        return (
            <li key={this.props.id}>
                <header>{title}</header>
                <ItemBody author={author} price={price} description={description} coverArt={coverArt} />
            </li>
        );
    }
}

export default ResultsItem;