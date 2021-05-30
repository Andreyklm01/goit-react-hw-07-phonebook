import { NavLink } from 'react-router-dom';
import AuthNav from '../components/AuthNav';
import UserMenu from '../components/UserMenu';

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

export default NavBar;
