import React from 'react';

import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
    <>
       
        <nav>
        <div className='menuitem'>
                <Link to='/'>Home</Link>
                <Link to='/Dogs'>Dogs</Link>    
                <Link to='/SearchDog'>SearchDog</Link>    
            
        </div>
        </nav>
    </>
    )
}

export default NavBar
