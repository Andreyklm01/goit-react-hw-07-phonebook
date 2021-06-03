import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './Views/NavBar';
import MainView from './Views/MainView';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ContactsView from './Views/ContactsView';
import { getCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

class App extends Component {
  componentDidMount() {
    this.props.onRefreshUser();
  }
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainView} />
          <PublicRoute
            path="/registration"
            component={RegisterForm}
            redirectTo="/contacts"
            restricted
          />
          <PublicRoute
            path="/login"
            component={LoginForm}
            redirectTo="/contacts"
            restricted
          />
          <PrivateRoute
            path="/contacts"
            component={ContactsView}
            redirectTo="/login"
          />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRefreshUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
