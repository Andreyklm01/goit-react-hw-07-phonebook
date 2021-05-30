import { Route, Switch } from 'react-router-dom';
import NavBar from './Views/NavBar';
import MainView from './Views/MainView';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ContactsView from './Views/ContactsView';

const App = () => (
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

export default App;
