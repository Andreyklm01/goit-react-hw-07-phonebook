const UserMenu = ({ name, onLogout }) => (
  <div>
    <p>Welcome, {name}</p>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

export default UserMenu;
