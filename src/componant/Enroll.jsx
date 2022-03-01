import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink, Redirect } from 'react-router-dom'
import SignIn from '../SignIn';
// import PlusCourses from './componant/PlusCourses';
const Enroll = () => {
    const [info, setinfo] = useState(
        {

            username: "",
            p: "",
            cp: "",
        }

    );
    // const [password, setpassword] = useState("")
    // const [confirmpass,setconfirmpass]=useState("")
    const onsubmiting = (e) => {
        e.preventDefault();
        <SignIn />
        alert('subbmited')
        // console.log({name.username})

    }
    const okey = (props) => {
        // alert('ushdsau')
        // {this.props.name.cp}
    }
    const inputevent = (event) => {
        console.log(event.target.value);
        // console.log(event.target.name);
        // setname(event.target.value);
        // setpassword(event.target.value);
        // setconfirmpass(event.target.value);
        const { value, name } = event.target;

        setinfo((prevalue) => {
            if (name == 'username') {

                return {
                    username: value,
                    p: prevalue.p,
                    cp: prevalue.cp,
                };
            }
            else if(name==='p')
            {
                return{
                    username: prevalue.username,
                    p:value,
                    cp: prevalue.cp,
                }
            }
            else if(name=='cp')
            {
                return{
                    username: prevalue.username,
                    p:prevalue.p,
                    cp:value,
                }
            }

        })
    };

    return (
        <>
            <form action="loginform new" onSubmit={onsubmiting} method='post' >

                <div className="login_wrap">
                    <div className="login_boxs">
                        <div className="our_logo">
                            <h3>edomain Plus {info.cp} <i class="fab fa-ello"></i> </h3>
                        </div>
                        <div className="login_box">
                            <input type="text" autoComplete='off' required
                                name="username"
                                id="uname"
                                placeholder='username or E-mail'
                                onChange={inputevent}
                            // value={name.username}
                            />
                        </div>
                        <div className="login_box">
                            <input type="password" autoComplete='off' required name="" placeholder='password'
                                onChange={inputevent}
                                // value={name.p}
                                name="p"
                            />
                        </div>
                        <div className="login_box">
                            <input type="password" autoComplete='off' required name="" placeholder='Confirm password'
                                onChange={inputevent}
                                // value={name.cp}
                                name="cp"
                            />
                        </div>
                        <div className="login_btn">
                            <button onClick={okey} name='log' id='logbutton' value='login'
                            >Enroll<i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>

                {/* <SignIn uname={info.username}/> */}
            </form>
        </>
    )
}
export default Enroll
