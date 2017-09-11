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
      const {context, from, poster, text, title, to} = this.state.item;
    return (
      <div className="Thread">
          <h1>{title}</h1>
          <div className="material language">{from}</div>
          <i className="arrow right blue"></i>
          <i className="arrow right blue"></i>
          <div className="material language">{to}</div>
          <br/>
          <span>posted by: {poster}</span>
          <p className="material">{text}</p>
          <p className="material">{context}</p>
      </div>
    );
  }
}

export default Thread;