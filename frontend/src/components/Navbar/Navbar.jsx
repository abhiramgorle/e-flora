import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to set active menu based on the current URL
  const setActiveMenu = () => {
    const pathname = location.pathname;
    if (pathname === '/') {
      setMenu('home');
    } else if (pathname === '/products') {
      setMenu('categories');
    } else if (pathname === '/blogs') {
      setMenu('blogs');
    } else if (pathname === '/contact-us') {
      setMenu('contact us');
    } else if (pathname === '/recommendations') {
      setMenu('recommendations');
    } else {
      setMenu('');
    }
  };

  // Call setActiveMenu on component mount and whenever location changes
  useEffect(() => {
    setActiveMenu();
  }, [location.pathname]);

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <img className='logo1' src={assets.logo1} alt='' />
      </Link>
      <ul className='navbar-menu'>
        <li
          className={`center ${menu === 'home' ? 'active' : ''}`}
          onClick={() => setMenu('home')}
        >
          <Link to='/'>Home</Link>
        </li>
        <li
          className={`center ${menu === 'categories' ? 'active' : ''}`}
          onClick={() => setMenu('categories')}
        >
          <Link to='/products'>Products</Link>
        </li>
        <li
          className={`center ${menu === 'recommendations' ? 'active' : ''}`}
          onClick={() => setMenu('recommendations')}
        >
          <Link to='/recommendations'>Recommendations</Link>
        </li>
        <li
          className={`center ${menu === 'blogs' ? 'active' : ''}`}
          onClick={() => setMenu('blogs')}
        >
          <Link to='/blogs'>Blogs</Link>
        </li>
        <li
          className={`center ${menu === 'contact us' ? 'active' : ''}`}
          onClick={() => setMenu('contact us')}
        >
          <Link to='/contact-us'>Contact us</Link>
        </li>
      </ul>
      <div className='navbar-right'>
        <Link to='/search'><img src={assets.search_icon} alt='' /></Link>
        <Link to='/cart' className='navbar-search-icon'>
        <div className={getTotalCartAmount() > 0 ? 'dot' : ''}></div>
          <img src={assets.basket_icon} alt='' />
        </Link>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt='' />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt='' /> <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt='' /> <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
