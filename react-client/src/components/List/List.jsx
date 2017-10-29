import axios from 'axios';
import React, {Component} from 'react';
import './List.css';
import ListItem from './ListItem/ListItem';


class List extends Component {

    constructor(props){
        super(props);
        this.getItems = this.getItems.bind(this);
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

        })
    }

    static goToNewPost() {
        document.location = '/newPost';
    }
    handleInputChange(event){
        this.setState({inputValue:event.target.value});
    }

    render() {

        let a = this.state.items;

        const listItems = a.map((item) => {
            return <ListItem key={item._id} {...item}/>;
        });

        return (
            <div className="List">
                <div className="material div">
                    <h2 className="blue">
                        Welcome to Speakers
                        <div className="material btn float-r" onClick={List.goToNewPost}>New Post</div>
                    </h2>
                    <h3 className="blue">The place for the most accurate translations</h3>
                    {listItems}
                </div>
                <input className="material text-input" value={this.state.inputValue} onChange={this.handleInputChange} type="text"/>
                <div className="material btn" onClick={this.addItem}>Add item</div>
                <br/>
                <br/>
            </div>
        );
    }
}

export default List;