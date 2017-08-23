import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem/ListItem';


class List extends Component {



  render() {

  	var a = [];
  	a.push({id:1,name:'kasper'});
  	a.push({id:2,name:'marta'});

  	const listItems = a.map((item) => {
  		return <ListItem key={item.name} {...item}/>;
  	});

    return (
      <div className="List">
      	<h1 class="List" >List</h1>
      	{listItems}
      	<a href="/thread">Thread</a>
      </div>
    );
  }
}

export default List;