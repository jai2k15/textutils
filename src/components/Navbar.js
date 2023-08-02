import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import '../App.css'

export default function Navbar(props) {
  let navbar = document.getElementById('navbar');
  let ulist = document.getElementById('ulist');

  
  const toggleHamburger = () =>{
    if(navbar && ulist ){
      // navbar.style.height='70px';
      // ulist.style.display='none';
    if(navbar.style.height=='70px'){
      navbar.style.height='300px'
      ulist.style.display='flex'
    }else{
      navbar.style.height='70px'
      ulist.style.display='none'
    }
  }
  }
  return (
    <>
      {/* <div className="hamburger">
        
    </div> */}

        <nav id="navbar" className={` nav_${props.mode}`}>
        <ul id='ulist'>
          <li id="head">{props.title}</li>
          <Link className='text-link' to="/"><li>Home</li></Link>
          <li><Link className='text-link' to="/about">About</Link></li>
          <li>
              <label className="switch">
                <input type="checkbox" onClick={props.toggleMode}/>
                <span className={`slider round`}></span>
              </label>
          </li>
        </ul>
            {/* <div className='redCircle' onClick={props.redColor}></div>
            <div className='yellowCircle' onClick={props.yellowColor}></div>
            <div className='greenCircle' onClick={props.greenColor}></div> */}
            
            <div id='hamburgerLines' onClick={toggleHamburger} className="hamburgerLines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            
      </nav>
      <Outlet/>
    </>
  )
}
