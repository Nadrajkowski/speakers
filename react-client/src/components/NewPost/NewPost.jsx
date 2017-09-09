import React, {Component} from 'react';
import './NewPost.css';


class NewPost extends Component {

    constructor(props) {
        super(props);
        //this.goToPost = this.goToPost.bind(this);
        this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
        this.state = {
            context: '',
            from: '',
            text: '',
            title: '',
            to: ''
        };
    }

    handleContextInputChange(event) {
        this.setState({context: event.target.value});
    }

    handleFromInputChange(event) {
        this.setState({from: event.target.value});
    }

    handleTextInputChange(event) {
        this.setState({text: event.target.value});
    }

    handleTitleInputChange(event) {
        this.setState({title: event.target.value});
    }

    handleToInputChange(event) {
        this.setState({to: event.target.value});
    }

    render() {

        const {} = this.props;
        return (
            <div className="material div">
                <h2 className="blue">Create New Post</h2>
                <div className="input-group">
                    <span className="input-descriptor">From:</span>
                    <input
                        className="material text-input"
                        value={this.state.from}
                        onChange={this.handleFromInputChange}
                        type="text"
                        placeholder="e.g. english"
                    />
                    <span className="input-descriptor">To:</span>
                    <input
                        className="material text-input"
                        value={this.state.to}
                        onChange={this.handleToInputChange}
                        type="text"
                        placeholder="e.g. polish"
                    />
                </div>
                <div className="input-group">
                    <span className="input-descriptor">Title:</span>
                    <br/>
                    <input
                        className="material text-input lg"
                        value={this.state.title}
                        onChange={this.handleTitleInputChange}
                        type="text"
                        placeholder="Title"
                    />
                </div>
                <div className="input-group">
                    <span className="input-descriptor">Text:</span>
                    <br/>
                    <textarea
                        className="material textarea"
                        value={this.state.text}
                        onChange={this.handleTextInputChange}
                        type="text"
                        placeholder="Text to be traslated"
                    />
                </div>
                <div className="input-group">
                    <span className="input-descriptor">Context (optional):</span>
                    <br/>
                    <textarea
                        className="material textarea"
                        value={this.state.context}
                        onChange={this.handleContextInputChange}
                        type="text"
                        placeholder="Provide some context for the translation"
                    />
                </div>
                <div className="material btn">Post</div>
            </div>
        );//return

    }//render

}//class

export default NewPost;