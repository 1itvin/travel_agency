import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentPageContext } from '../../../App';

function Header() {
  const { currentPage } = useContext(CurrentPageContext);

  return (
    <header>
      <div className="main-container">
        {/* <h1 className="logo">Travel<span>er</span></h1> */}
        <nav>
          <ul>
            <li className={currentPage['home'] ? 'selected': ''}>
              <Link to="/" onClick={() => window.scrollTo(0,0)}>Home</Link>
            </li>
            <li className={currentPage['all-tours'] ? 'selected': ''}>
              <Link to="/all-tours" onClick={() => window.scrollTo(0,0)}>All Tours</Link>
            </li>
            <li className={currentPage['sign-in'] ? 'selected': ''}>
            <Link to="/log-in" onClick={() => window.scrollTo(0,0)}>Sign in</Link>
            </li>

            {/* <li className={currentPage['register'] ? 'selected': ''}>
            <Link to="/register" onClick={() => window.scrollTo(0,0)}>Register Now1</Link>
            </li> */}

            {/* <li className={currentPage['register'] ? 'selected': ''}>
            <Link to="/register" onClick={() => window.scrollTo(0,0)}>Register Now2</Link>
            </li> */}

            {/* <li className={currentPage['register'] ? 'selected': ''}>
            <Link to="/register" onClick={() => window.scrollTo(0,0)}>Register Now3</Link>
            </li> */}

          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;