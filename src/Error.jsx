/* 404 error Page */
import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <h1>404 Page</h1>
            <p>Sorry this page does not exits ! </p>
          <NavLink to='/'>Go Back</NavLink>
        </>
    )
}
/* And in App.jsx we dont need to give path if we want to show this message  
e.g .  <Route  component={Error} />*/
export default Error
