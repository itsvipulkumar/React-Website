import React from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink, Redirect } from 'react-router-dom'
// import PlusCourses from './componant/PlusCourses';
const Signup = (props) => {
    const location = useLocation();
    const loggedin = (e) => {
        e.preventDefault();
        var un = document.forms['myform']['uname'].value;
        var pw = document.forms['myform']['pass'].value;
        if (un == "student" && pw == "1234") {
            window.location.href = "/signin/pluscourses"
        }
        else {
            alert('details dont match')
        }
    }

    return (
        <>
            <form action="loginform new" onSubmit={loggedin} method='post' name='myform'>
                <div className="login_wrap  signup_wrap">
                    <div className="login_boxs signup_boxes">
                        <div className="our_logo">
                            <h3>Create Your Account</h3>
                        </div>
                        <div className="login_box">
                            <input type="text" autoComplete='off' required name="" id="uname" placeholder='Enter full name' />
                        </div>
                        <div className="login_box">
                            <input type="email" autoComplete='off' required name="" id="uname" placeholder='Email' />
                        </div>
                        <div className="login_box">
                            <input type="email" autoComplete='off' required name="" id="uname" placeholder='Username' />
                        </div>
                        <div className="login_box">
                            <input type="password" autoComplete='off' required name="" id="pass" placeholder='password' />
                        </div>
                        <div className="login_box">
                            <input type="password" autoComplete='off' required name="" id="pass" placeholder='Confirm password' />
                        </div>
                        <div className="login_btn">
                            <button name='log' id='logbutton' value='login'
                            >Sign up <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        </div>
                        <p>or you can sign in with</p>
                        <div className="login_icon">
                            <div>
                                <i class="fab fa-facebook icon"></i>
                            </div>
                            <div>
                                <i class="fab fa-instagram icon"></i>
                            </div>
                            <div>
                                <i class="fab fa-github icon"></i>
                            </div>
                            <div>
                                <i class="fab fa-google icon"></i>
                            </div>
                        </div>
                        <div className="conditions">
                            <input type="checkbox" />
                            <div>I accept all the term & conditions</div>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}
export default Signup
