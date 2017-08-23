import React, { Component } from 'react';
import './ListItem.css';


class ListItem extends Component {

	render() {
		const { id, name } = this.props;
  	return (
    		<div className="ListItem">
    			<h4 class="ListItem" >{name}</h4>
    			<a>{id}</a>
    		</div>//class="ListItem"
  	);//return
	}//render

}//class

export default ListItem;