import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthNav from '../components/AuthNav';
import UserMenu from '../components/UserMenu';
import { getIsAuthorized } from '../redux/auth/auth-selectors';

const NavBar = ({ isAutorized }) => (
  <div>
    <ul>
      <li>
        <NavLink to="/">Main</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Phonebook</NavLink>
      </li>
    </ul>
    {isAutorized ? <UserMenu /> : <AuthNav />}
  </div>
);

const mapStateToProps = state => ({
  isAutorized: getIsAuthorized(state),
});

export default connect(mapStateToProps)(NavBar);
