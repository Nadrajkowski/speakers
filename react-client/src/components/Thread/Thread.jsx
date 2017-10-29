import axios from 'axios';
import moment from 'moment';
import React, {Component} from 'react';
import './Thread.css';
import Answer from './Answer/Answer';


class Thread extends Component {

    // React methods
    constructor(props){
        super(props);
        this.state = {
            item: {},
            answersElements: [],
            apiPath: 'http://localhost:2001/',
            newAnswer: '',
            newAnswerUser: ''
        };
        this.addAnswer = this.addAnswer.bind(this);
        this.getThread = this.getThread.bind(this);
        this.handleNewAnswerInputChange = this.handleNewAnswerInputChange.bind(this);
        this.handleNewAnswerUserInputChange = this.handleNewAnswerUserInputChange.bind(this);
    }

    componentDidMount() {
        this.getThread();
    }

    // own methods
    addAnswer() {
        const {newAnswer, newAnswerUser} = this.state;
        if (newAnswer === '' || newAnswerUser === '') {
            alert('Please fill out all fields');
            return;
        }
        axios({
            url: 'http://localhost:2001/items/answer',
            method: 'put',
            data: {
                id: this.state.item._id,
                text: newAnswer,
                poster: newAnswerUser
            }
        })
            .then(response => {
                this.getThread()
            })
            .catch(err => {
                alert(err)
            });
    }

    getThread(){
        const id = this.props.location.pathname.split('/')[2];
        axios.get(this.state.apiPath+'items/'+id)
            .then(response => {
                this.setState({
                    item: response.data,
                    answersElements: response.data.answers.map((answer) => {
                        return <Answer key={answer._id} {...answer}/>;
                    })
                });
            })
            .catch(err => {
                alert(err.message);

            })
    }

    handleNewAnswerInputChange(event) {
        this.setState({newAnswer: event.target.value});
    }

    handleNewAnswerUserInputChange(event) {
        this.setState({newAnswerUser: event.target.value});
    }

  render() {

      console.log(this.state.answersElements);
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
          <h3>Answers:</h3>
          {this.state.answersElements}
          <h3>Add a new Answer:</h3>
          <div className="input-group">
              <span className="input-descriptor">Answer:</span>
              <br/>
              <textarea
                  className="material textarea"
                  value={this.state.newAnswer}
                  onChange={this.handleNewAnswerInputChange}
                  type="text"
                  placeholder="your answer ..."
              />
          </div>
          <div className="input-group">
              <span className="input-descriptor">Username:</span>
              <br/>
              <input
                  className="material text-input lg"
                  value={this.state.newAnswerUser}
                  onChange={this.handleNewAnswerUserInputChange}
                  type="text"
                  placeholder="your username"
              />
              <br/>
              <div
                  className="material btn"
                  onClick={this.addAnswer}
              >Add Answer
              </div>
          </div>
      </div>
    );
  }
}

export default Thread;