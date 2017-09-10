import React, {Component} from 'react';
import './ListItem';


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

        const {from, poster, title, to} = this.props;
  		return (
			<div className="material div link" onClick={this.goToPost}>
				<h3>{title}</h3>
				<span>posted by: {poster}</span>
				<br/><br/>
				<div className="material language">{from}</div>
				<i className="arrow right blue"></i>
				<i className="arrow right blue"></i>
				<div className="material language">{to}</div>
			</div>
  		);//return

	}//render

}//class

export default ListItem;