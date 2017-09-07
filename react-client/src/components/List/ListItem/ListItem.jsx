import React, { Component } from 'react';
import './ListItem.css';


class ListItem extends Component {

    constructor(props){
        super(props);
		this.goToPost = this.goToPost.bind(this);
		this.state = {};
    }

    goToPost(){
    	document.location = '/thread/'+this.props.id;
	}

	render() {

		const { id, name, publisher, textPreview } = this.props;
  		return (
			<div className="material div link" onClick={this.goToPost}>
				<h3>{name}</h3>
				<span>Publisher: {publisher}</span>
				<p>{textPreview}</p>
			</div>
  		);//return

	}//render

}//class

export default ListItem;