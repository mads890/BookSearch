import React, { Component } from 'react';

class ItemBody extends Component {
    render() {
        return (
            <div className="item_body">
                <div className="thumbnail_container">
                    <img className="thumbnail_image" src={this.props.thumbnail} alt="Cover art"/>
                </div>
                <div className="subheading">
                    <p>Author: {this.props.author}</p>
                    <p>Price: {this.props.price}</p>
                </div>
                <div className="description">
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default ItemBody;