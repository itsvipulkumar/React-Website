import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import CScience from './CScience';
import { useLocation } from 'react-router-dom';

const Courses = (props) => {
    const location =useLocation();
    // console.log(location.state.theme_state)
    var theme=location.state
    var mood="dark"
    // console.log(theme)
    // console.log(props.location.state)
    // const {theme_state}=location.state || {};
    // console.log(theme_state)


    return (
        <>
        
            <div className="course_wrap ">
                <div className='get_pdf'>
                {/* {theme} */}
                {/* {this.location.state.theme_state} */}
                {/* (location.state) */}
                    <h1>Get our ultimate and Quality course for free.</h1>
                    <p>You just need to follow these steps to getting free course pdf</p>
                    <div>
                        <ul>
                            <li>Go to our home page</li>
                            <li>Subscribe our site</li>
                            <li>If you have successfully subscribe our site then you'll  get an activation key</li>
                            <li>Now come to our course section and click on any course or catagory</li>
                            <li>then click on download PDF </li>
                            <li>You can do the same at the time of downloding pdf</li>
                            <li>Enter your Activaion key and download you pdf successfully !</li>
                        </ul>
                    </div>
                </div>
                <div className="menutab">
                    <NavLink style={{ textDecoration: 'none' }} to='/computerscience'><div className='menu'>
                        <div className="menu_image">
                            <img src="./Images/coding.jpg" alt="engineer" />
                        </div>
                        <div className="menu_content">
                            <h4>Computer Science</h4>
                            <p>270 Courses</p>
                        </div>
                    </div></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to='/languages'><div className='menu'>
                        <div className="menu_image">
                            <img src="https://miro.medium.com/max/2000/1*pa2hIPTLqrbMHBTNAsTq4g.png" alt="jbbu" />
                        </div>
                        <div className="menu_content">
                            <h4>Languages</h4>
                            <p>390 Courses</p>
                        </div>
                    </div></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to='/course/database'><div className='menu'>
                        <div className="menu_image">
                            <img src="https://miro.medium.com/max/2000/1*pa2hIPTLqrbMHBTNAsTq4g.png" alt="jbbu" />
                        </div>
                        <div className="menu_content">
                            <h4>Database</h4>
                            <p>80 Courses</p>
                        </div>
                    </div></NavLink>

                </div>
                <div className="menutab">
                    <NavLink style={{ textDecoration: 'none' }} to='/computerscience'><div className='menu'>
                        <div className="menu_image">
                            <img src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" alt="jbbu" />
                        </div>
                        <div className="menu_content">
                            <h4>Business</h4>
                            <p>501 Courses</p>
                        </div>
                    </div></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to='/languages'><div className='menu'>
                        <div className="menu_image">
                            <img src="https://assets.entrepreneur.com/content/3x2/2000/1638079565-Untitleddesign-2021-11-28T100532825.png" alt="sdjk" />
                        </div>
                        <div className="menu_content">
                            <h4>Communication</h4>
                            <p>390 Courses</p>
                        </div>
                    </div></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to='/it'><div className='menu'>
                        <div className="menu_image">
                            <img src="https://assets.justinmind.com/wp-content/uploads/2019/10/best-20-web-development-blogs.png" alt="werw" />
                        </div>
                        <div className="menu_content">
                            <h4>Development</h4>
                            <p>390 Courses</p>
                        </div>
                    </div></NavLink>
                </div>
                <div className="menutab">
                    <NavLink style={{ textDecoration: 'none' }} to='/computerscience'><div className='menu'>
                        <div className="menu_image">
                            <img src="./Images/healtcare.png" alt="engineer" />
                        </div>
                        <div className="menu_content">
                            <h4>HealthCare</h4>
                            <p>201 Courses</p>
                        </div>
                    </div></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to='/languages'><div className='menu'>
                        <div className="menu_image">
                            <img src="./Images/engineer.jpg" alt="engineer" />
                        </div>
                        <div className="menu_content">
                            <h4>Engineering</h4>
                            <p>504 Courses</p>
                        </div>
                    </div></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to='/it'><div className='menu'>
                        <div className="menu_image">
                            <img src="./Images/socialscience.jpg" alt="engineer" />
                        </div>
                        <div className="menu_content">
                            <h4>Social Science</h4>
                            <p>120 Courses</p>
                        </div>
                    </div></NavLink>
                </div>
                <div className="menutab">
                    <NavLink style={{ textDecoration: 'none' }} to='/computerscience'><div className='menu'>
                        <div className="menu_image">
                            <img src="./Images/careerskill.jpg" alt="engineer" />
                        </div>
                        <div className="menu_content">
                            <h4>Career Skill</h4>
                            <p>69 Courses</p>
                        </div>
                    </div></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to='/languages'><div className='menu'>
                        <div className="menu_image">
                            <img src="./Images/bodylanguage.jpg" alt="engineer" />
                        </div>
                        <div className="menu_content">
                            <h4>Body Language</h4>
                            <p>49 Courses</p>
                        </div>
                    </div></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to='/it'><div className='menu'>
                        <div className="menu_image">
                            <img src="./Images/interview.jpg" alt="engineer" />
                        </div>
                        <div className="menu_content">
                            <h4>Interview Preparation</h4>
                            <p>233 Courses</p>
                        </div>
                    </div></NavLink>
                </div>
                <div className="menutab ">
                    <NavLink style={{ textDecoration: 'none' }} to='/it'><div className='menu'>
                        <div className="menu_image">
                            <img src="https://realbusiness.co.uk/wp-content/uploads/2021/07/social-media-5187243_1920-1024x683.png" alt="jbbu" />
                        </div>
                        <div className="menu_content">
                            <h4>Information Technology</h4>
                            <p>321 Courses</p>
                        </div>
                    </div></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to='/it'><div className='menu'>
                        <div className="menu_image">
                            <img src="https://realbusiness.co.uk/wp-content/uploads/2021/07/social-media-5187243_1920-1024x683.png" alt="jbbu" />
                        </div>
                        <div className="menu_content">
                            <h4>Projects</h4>
                            <p>81 Courses</p>
                        </div>
                    </div></NavLink>
                </div>
            </div>
        </>
    )
}

export default Courses
