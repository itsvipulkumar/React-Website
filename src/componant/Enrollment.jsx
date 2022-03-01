import React from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink, Redirect } from 'react-router-dom';
import swal from 'sweetalert';
// import PlusCourses from './componant/PlusCourses';
const Enrollment = (props) => {

    function myFunction() {
        // alert("hiiiiii")
        var x = document.getElementById("pass");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    const loggedin = (e) => {
        e.preventDefault();
        var un = document.forms['myform']['uname'].value;
        var pw = document.forms['myform']['pass'].value;
        if (un === "vipul" && pw === "vipul@123") {
            window.location.href = "/signin/pluscourses"
        }
        else {
            // alert('details dont match')
            swal("Failed", "You entered wrong details", "warning");
        }
    }

    return (
        <>
            <form className='enroll_login' action="loginform new " onSubmit={loggedin} method='post' name='myform'>
                <div className="enrollimg">
                    <img src="../Images/enroll img.svg" alt="enroll images" />
                </div>
                <div className="login_wrap e-plus">
                    <div className="login_boxs">
                        <div className="our_logo">
                            <h3>eDomain Plus <i class="fab fa-ello"></i></h3>
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
                            >Enroll  <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        </div>
                        <div className="forget_pass">
                            <a href="#">Forgot Password?</a>

                        </div>

                    </div>
                </div>

            </form>
        </>
    )
}
export default Enrollment
