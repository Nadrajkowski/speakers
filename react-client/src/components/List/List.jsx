import axios from 'axios';
import React, {Component} from 'react';
import './List.css';
import ListItem from './ListItem/ListItem';


class List extends Component {

    constructor(props){
        super(props);

        this.getItems = this.getItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            items: [],
            inputValue: ''
        }
    }

    componentDidMount(){
        this.getItems();
    }

    getItems(){
        axios.get('http://localhost:3000/items')
        .then(response => {
            this.setState({items: response.data});
        })
        .catch(err => {
            alert(err.message);
            return;
        })
    }

    addItem(){
        axios.get('http://localhost:3000/items/add/'+this.state.inputValue)
        .then(response => {
            this.getItems();
        })
        .catch(err => {
            alert(err);
        })
    }

    handleInputChange(event){
        this.setState({inputValue:event.target.value});
    }


    render() {

        var a = this.state.items;
        //a.push({id: 1, name: 'kasper'});
        //a.push({id: 2, name: 'marta'});

        const listItems = a.map((item) => {
            return <ListItem key={item.name} {...item}/>;
        });

        return (
            <div className="List">
                <h1 class="List">List</h1>
                {listItems}
                <input value={this.state.inputValue} onChange={this.handleInputChange} type="text"/>
                <button onClick={this.addItem}>add</button>
                <br/>
                <br/>
                <a href="/thread">Thread</a>
            </div>
        );
    }
}

export default List;