import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import PostsIndex from './containers/posts_index';
import PostsShow from './containers/posts_show';
import PostsNew from './containers/posts_new';

import '../../assets/stylesheets/application.scss';

import postsReducer from './reducers/posts_reducer';

import housesReducer from './reducers/houses_reducer';
import selectedHouseReducer from './reducers/selected_house_reducer';

import MapWithList from './containers/map_with_list';

const reducers = combineReducers({
  // posts: postsReducer,
  // form: formReducer,
  houses: housesReducer,
  selectedHouse: selectedHouseReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <div className="map-frame-list">
        <Switch>

          {/*<Route path="/" exact component={PostsIndex} />
          <Route path="/posts/new" exact component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />*/}
          <Route path="/" exact component={MapWithList} />

        </Switch>
      </div>
    </Router>



  </Provider>,
  document.getElementById('root')
);


