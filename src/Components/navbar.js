import React from "react";
import {FaGithubSquare, FaXing} from 'react-icons/fa';

const Navbar = () => {
  return <nav>
    <ul className="navbar">
        <li className="navbar_heading"><FaXing/> Random Quotes Daily</li>
        <li className="github_link"><a href="https://github.com/napstar-420/random-quote-site" target='_blanck' rel='noreferrer'>Github <FaGithubSquare style={{marginLeft: '0.5rem', fontSize: '1.5rem'}}/></a></li>
    </ul>
  </nav>;
};

export default Navbar;
