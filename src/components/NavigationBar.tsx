import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/tag">TagPage</Link>
      </li>
    </div>
  );
};

export { NavBar };
