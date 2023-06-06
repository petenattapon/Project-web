import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../sass/LoginandRegis/NavAd.scss';

function NavbarAdmin() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any necessary logout actions (e.g., clear user session)

    // Navigate to the desired location after logout (e.g., login page)
    navigate('/login');
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Cancel the default behavior of the event
      event.preventDefault();

      // Manually navigate back to the current route to reset the history state
      navigate(location.pathname, { replace: true });
    };

    // Add the 'beforeunload' event listener to prevent the user from using back/forward buttons
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location.pathname, navigate]);

  return (
    <header id="main-admin">
      <div className="container">
        <div className="header-container-admin">
          <div className="logo-container">
            <Link to="/admin/productSchema" className="aaa">
              <h2>Admin page</h2>
            </Link>
          </div>
          <div className="page-admin">
            <Link to="/admin/productSchema" className="lAd">
              Product
            </Link>
            <Link to="/userSchema" className="lAd">
              User
            </Link>
            <Link to="/addItems" className="lAd">
              Add items
            </Link>
          </div>
          <div className="logout-admin">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavbarAdmin;
