import React, { Component } from 'react';
import './ListItem.css';


class ListItem extends Component {

	render() {

		const { id, name } = this.props;
  		return (
    		<div className="ListItem">
    			<span class="name" >{name}</span>
    			<a class="id">{id}</a>
    		</div>//class="ListItem"
  		);//return
	}//render

}//class

export default ListItem;