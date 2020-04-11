import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import loadable from '@loadable/component'
import { connect } from 'react-redux';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import Page from './components/Page/Page';

const Auth = loadable(() => import('./containers/Auth/Auth'));
const Main = loadable(() => import('./containers/Main/Main'));
const About = loadable(() => import('./containers/About/About'));
const Blog = loadable(() => import('./containers/Blog/Blog'));
const Profile = loadable(() => import('./containers/Profile/Profile'));
const Bottom = loadable(() => import('./components/Navigation/Bottom/Bottom'));


class App extends Component {
  componentDidMount () {
    this.props.onTryOutSignup();
  }
  render() {
    return (
      <div className="App">
       <Layout>
        <Switch>
          <Route path="/main" exact render={() =>
             <Fragment>
                <Main />
                <Page />
                <Bottom />
             </Fragment>}/>
          <Route exact path="/about" render={() =>
             <Fragment>
                <About />
                <Bottom />
             </Fragment>}/>
             <Route path="/blog"  component={Blog}/>
             <Route path="/auth"  component={Auth}/>
             {this.props.isAuthenticated
                ? <Route path="/profile" component={Profile}/>
                : null}
             <Route path="/logout" exact component={Logout}/>

          <Redirect to="/main" />
        </Switch>
       </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
     isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return{
      onTryOutSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
