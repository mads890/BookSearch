import React, { Component } from 'react';

class FilterOptions extends Component {
    render() {
        return (
            <div className="filter_options_box">
                <label htmlFor="print">Print Type:</label>
                <select id="print" onChange={e => this.props.filterPrint(e.target.val)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label htmlFor="book">Book Type:</label>
                <select id="book" onChange={e => this.props.filterBook(e.target.val)}>
                    <option value="ebooks">All</option>
                    <option value="free-ebooks">Free</option>
                    <option value="paid-ebooks">Paid</option>
                </select>
            </div>
        );
    }
}

export default FilterOptions;