import moment from 'moment';
import React, {Component} from 'react';


class Answer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            text,
            createdAt,
            updatedAt
        } = this.props;
        const updatedAtAsReadableString = moment(updatedAt).format('DD. MMM YYYY');
        const createdAtAsReadableString = moment(createdAt).format('DD. MMM YYYY');
        return (
            <div>
                <p className="material">{text}</p>
                <div className="meta-info">
                    <span>last updated: {updatedAtAsReadableString}, </span>
                    <span>posted: {createdAtAsReadableString}</span>
                </div>
            </div>
        );
    }
}

export default Answer;