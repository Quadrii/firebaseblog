import React from 'react'
import './nav.css';
import { Link } from 'react-router';


const Navbar = () => {
  return (
    <div className='nav'>
        <div className='navwrap'>
            <ul className='navlist'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/createpost"><li>Create Post</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar