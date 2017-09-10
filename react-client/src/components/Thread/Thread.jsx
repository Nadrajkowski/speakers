import axios from 'axios';
import React, {Component} from 'react';
import './Thread.css';


class Thread extends Component {

    constructor(props){
        super(props);
        this.state = {
            item: {},
            apiPath: 'http://localhost:2000/'
        };
        this.getThread = this.getThread.bind(this);
    }

    componentWillMount(){
        this.getThread();
    }

    getThread(){
        const id = this.props.location.pathname.split('/')[2];
        axios.get(this.state.apiPath+'items/'+id)
            .then(response => {
                this.setState({item: response.data});
            })
            .catch(err => {
                alert(err.message);

            })
    }

  render() {
      const {text, publisher, name} = this.state.item;
    return (
      <div className="Thread">
          <h1>{name}</h1>
          <span>Publisher: {publisher}</span>
          <br/>
      	<p>{text}</p>
      </div>
    );
  }
}

export default Thread;