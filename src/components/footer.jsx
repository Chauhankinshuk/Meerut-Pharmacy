import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram,faXTwitter,faYoutube,faGithub} from '@fortawesome/free-brands-svg-icons';
import { Route, Routes ,NavLink,Link} from 'react-router-dom';
 const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-800 text-white py-10">
              <ul className="flex justify-center space-x-8 py-10">
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/">Blog</Link></li>
                  <li><Link to="/contact">contact</Link></li>
                  <li><Link to="/">Press</Link></li>
                  <li><Link to="/">Accessiblity</Link></li>
                  <li><Link to="/">Partners</Link></li>
              </ul>
              <ul className="flex justify-center space-x-8 py-8">
              <li><Link to="" ><FontAwesomeIcon icon={faFacebook} /></Link></li>
              <li><Link to="" ><FontAwesomeIcon icon={faInstagram} /></Link></li>
              <li><Link to="" ><FontAwesomeIcon icon={faXTwitter} /></Link></li>
              <li><Link to="" ><FontAwesomeIcon icon={faGithub} /></Link></li>
              <li><Link to="" ><FontAwesomeIcon icon={faYoutube} /></Link></li>
              </ul>
              <div className="flex justify-center items-center">
              <p className="item-center text-[10px] ">© 2024 meerut pharmacy, Inc. All rights reserved.</p>
              </div>
              
          </footer>
    </div>
  )
}
export default Footer