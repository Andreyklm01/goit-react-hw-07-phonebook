import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './Views/NavBar';
import MainView from './Views/MainView';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ContactsView from './Views/ContactsView';
import { getCurrentUser } from './redux/auth/auth-operations';

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
          <Route path="/registration" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRefreshUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
