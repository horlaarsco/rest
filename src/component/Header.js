import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav className='nav m-5 '>
        <a className='' href='#'>
          <Link to='/'>Horla</Link>
        </a>
        <div>
          <ul className='row'>
            <li className=' mx-4  btn btn-warning'>
              <Link to='/about'>About Me</Link>
            </li>
            <li className=' mx-4 btn btn-rounded'>
              <Link to='/project'>Projects</Link>
            </li>
            <li className=' mx-4 btn btn-warning'>
              <Link to='/contact'>Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
