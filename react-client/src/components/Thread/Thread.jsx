import axios from 'axios';
import moment from 'moment';
import React, {Component} from 'react';
import './Thread.css';


class Thread extends Component {

    constructor(props){
        super(props);
        this.state = {
            item: {},
            apiPath: 'http://localhost:2001/'
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
      const {
          context,
          createdAt,
          from,
          poster,
          text,
          title,
          to,
          updatedAt
      } = this.state.item;
      const updatedAtAsReadableString = moment(updatedAt).format('DD. MMM YYYY');
      const createdAtAsReadableString = moment(createdAt).format('DD. MMM YYYY');
    return (
      <div className="Thread">
          <h1>{title}</h1>
          <div className="material language">{from}</div>
          <i className="arrow right blue"></i>
          <i className="arrow right blue"></i>
          <div className="material language">{to}</div>
          <br/>
          <div className="material">
              <p className="text"> {text}</p>
              <p className="text">{context}</p>
          </div>
          <div className="meta-info">
              <span>posted by: {poster}, </span>
              <span>last updated: {updatedAtAsReadableString}, </span>
              <span>posted: {createdAtAsReadableString}</span>
          </div>
      </div>
    );
  }
}

export default Thread;