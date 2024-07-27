// NavBar.jsx
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/dashboard/profile">Profile</Link>
    <Link to="/dashboard/settings">Settings</Link>
  </nav>
);

export default NavBar;
