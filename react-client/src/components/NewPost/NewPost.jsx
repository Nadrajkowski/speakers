import React, {Component} from 'react';
import './NewPost.css';


class NewPost extends Component {

    constructor(props) {
        super(props);
        //this.goToPost = this.goToPost.bind(this);
        this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
        this.state = {
            title: '',

        };
    }

    handleTitleInputChange(event) {
        this.setState({title: event.target.value});
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
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Title"
                    />
                </div>
                <div className="input-group">
                    <span className="input-descriptor">Text:</span>
                    <br/>
                    <textarea
                        className="material textarea"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Text to be traslated"
                    />
                </div>
                <div className="input-group">
                    <span className="input-descriptor">Context (optional):</span>
                    <br/>
                    <textarea
                        className="material textarea"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
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