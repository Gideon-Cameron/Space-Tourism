import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // ✅ Updated import
import Logo from './assets/logo.svg';
import Burger from './assets/icon-hamburger.svg';
import closeIcon from './assets/icon-close.svg';

function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const location = useLocation(); // ✅ React Router hook

  // Close menu on nav click
  function close() {
    setOpen(false);
  }

  // Update active nav based on route
  useEffect(() => {
    const currentPath = location.pathname.replace('/', '') || 'home';
    setActive(currentPath);
  }, [location]); // ✅ Runs when the route changes

  return (
    <header>
      <nav className={`nav ${open ? 'show' : ''}`}>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <ul className="ul">
          <li onClick={close} className={active === 'home' ? 'active' : ''}>
            <Link to="/">00 Home</Link>
          </li>
          <li onClick={close} className={active === 'destination' ? 'active' : ''}>
            <Link to="/destination">01 Destination</Link>
          </li>
          <li onClick={close} className={active === 'crew' ? 'active' : ''}>
            <Link to="/crew">02 Crew</Link>
          </li>
          <li onClick={close} className={active === 'technology' ? 'active' : ''}>
            <Link to="/technology">03 Technology</Link>
          </li>
        </ul>

        <div onClick={() => setOpen(!open)} className="burger">
          {
            open
              ? <img src={closeIcon} alt="Close Menu" />
              : <img src={Burger} alt="Open Menu" />
          }
        </div>
      </nav>
    </header>
  );
}

export default Nav;
