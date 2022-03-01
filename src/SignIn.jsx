import React from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink, Redirect } from 'react-router-dom'
import PlusCourses from './componant/PlusCourses';
const SignIn = (props) => {
    function myFunction() {
        // alert("hiiiiii")
        var x = document.getElementById("pass");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    const location=useLocation();
    const loggedin = (e) => {
        e.preventDefault();
        var un = document.forms['myform']['uname'].value;
        var pw = document.forms['myform']['pass'].value;
        if (un == "vipul" || un=="edomainplus" && pw == "1234" || pw==="plusmember@123") {
            window.location.href = "/signin/pluscourses"
        }
        else {
            window.location.href = "/"
        }
    }

    return (
        <>
            <form action="loginform new" onSubmit={loggedin} method='post' name='myform'>
                <div className= "login_wrap">
                    <div className="login_boxs">
                        <div className="our_logo">
                            <h3>eDomain <i class="fab fa-ello"></i> {props.uname}</h3>
                        </div>
                        <div className="login_box">
                            <input type="text" autoComplete='off' required name="" id="uname" placeholder='username or E-mail' />
                        </div>
                        <div className="login_box">
                            <input type="password" autoComplete='off' required name="" id="pass" placeholder='password' />
                        </div>
                        <div className="showpass">
                            <input type="checkbox" onClick={myFunction} />
                            <p>Show Password</p>
                        </div>
                        <div className="login_btn">
                            <button name='log' id='logbutton' value='login'
                            >Login  <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        </div>
                        <div className="forget_pass">
                            <a href="#">Forgot Password?</a>
                             <a href="#">Sign Up</a>
                        </div>

                <div className="donthave">
                <p>Don't have an account?</p>
                <NavLink className="donthavesignup" exact to='/signup' style={{  textDecoration: 'none' }}>create</NavLink>
                </div>

                        {/* <p>or you can sign in with</p>
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
                            <input type="checkbox"  />
                            <div>I accept all the term & conditions</div>
                        </div> */}
                    </div>

                </div>
            </form>
        </>
    )
}
export default SignIn
