import { connect } from 'react-redux';
import { getUserName } from '../redux/auth/auth-selectors';
import { logout } from '../redux/auth/auth-operations';

const UserMenu = ({ name, onLogout }) => (
  <div>
    <p>Welcome, {name}</p>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);
const mapStateToProps = state => ({
  name: getUserName(state),
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
