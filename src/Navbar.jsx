import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


// import { Toogle } from './componant/Toogle';
// import { Darkmood } from './componant/Darkmood';
// import { Darkmood } from './componant/Darkmood';


const Navbar = () => {
  const [mobile, setmobile] = useState(false);
  const [Dark, setDark] = useState(false);

  // const [theme, toogleTheme] = Darkmood("");
  // window.addEventListener('scroll',scrollUp)
  // console.log(theme)
  return (
    <>
      {/* {theme} */}
      <nav className= "mynavbar">
        <div className='weblogo'>
          <NavLink exact className=' logo' style={{ paddingLeft: 13, textDecoration: 'none' }}
            to="/">
            eDOMAIN <i class="fab fa-ello"></i></NavLink>
          {/* <div>
          <h1 
          onClick={()=>setDark(!Dark)}
          ><i class="fas fa-moon"></i></h1>
        </div> */}
        </div>

        <ul className={mobile ? "mobile_navlinks" : "navlinks"}
          onClick={() => {
            setmobile((false))
          }}
        >
          <div className="outer_mobiletab">
            <div className="mobiletab">
              <NavLink exact className='navitem course ' style={{ paddingLeft: 20, textDecoration: 'none' }}

                to={
                  {
                    pathname: '/courses',
                    
                  }
                }>
                <li>Courses</li>
              </NavLink>

              <NavLink exact className='navitem contact' style={{ paddingLeft: 20, textDecoration: 'none' }}
                to={
                  {
                    pathname: '/contact',
                    
                  }
                }>
                <li>Contact</li>
              </NavLink>
              <NavLink exact className='navitem contact' style={{ paddingLeft: 20, textDecoration: 'none' }} to={
                {
                  pathname: '/about',
                 
                }
              }>
                <li>About</li>
              </NavLink>
            </div>
            <div className="mobiletab">
              <NavLink exact className='navitem signin' style={{ paddingLeft: 20, textDecoration: 'none' }}
                to='/signin'>
                <li>Login</li>
              </NavLink>
              <NavLink exact className='navitem signup' style={{ paddingLeft: 20, textDecoration: 'none' }}
                to='/signup'>
                <li>Sign up</li>
              </NavLink>
              <NavLink exact className='navitem membership' style={{ paddingLeft: 20, textDecoration: 'none' }}
                to='/membership'>
                <li><i class="fas fa-crown"></i> </li>
              </NavLink>
              {/* <Toogle theme={theme} toogleTheme={toogleTheme} /> */}
            </div>
          </div>
        </ul>
        <button className='mobile_view' onClick={() => setmobile(!mobile)}>
          {mobile ? <i className='fas fa-times'></i> :
            <i className='fas fa-bars'></i>}
        </button>
        {/* <img className='waveimgnavbar' src="./Images/wave1.png" alt="navbar wave" /> */}

      </nav>
    </>
  )
}

export default Navbar
