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
            inputValue: '',
            apiPath: 'http://localhost:2000/'
        }
    }

    componentDidMount(){
        this.getItems();
    }

    getItems(){
        axios.get(this.state.apiPath+'items')
        .then(response => {
            this.setState({items: response.data});
        })
        .catch(err => {
            alert(err.message);
            return;
        })
    }

    addItem(){
        axios.get(this.state.apiPath+'items/add/'+this.state.inputValue)
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

        const listItems = a.map((item) => {
            return <ListItem key={item.id} {...item}/>;
        });

        return (
            <div className="List">
                <div className="material div">
                    <h2>List</h2>
                    {listItems}
                </div>
                <input className="material text-input" value={this.state.inputValue} onChange={this.handleInputChange} type="text"/>
                <div className="material btn" onClick={this.addItem}>Add item</div>
                <br/>
                <br/>
                <a href="/thread">Thread</a>
            </div>
        );
    }
}

export default List;