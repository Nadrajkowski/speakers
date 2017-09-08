import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import List from '../List/List';
import NewPost from '../NewPost/NewPost';
import Thread from '../Thread/Thread';

class Router extends Component {  

  render() {
    return (
      <div className="Router">
        <Switch>
        	<Route exact path="/" component={List}/>
        	<Route exact path="/thread" component={Thread}/>
            <Route path="/thread/:id" component={Thread}/>
            <Route path="/newPost" component={NewPost}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
