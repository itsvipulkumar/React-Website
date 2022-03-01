import React from 'react'
// import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const About = () => {
    // const location =useLocation();
    return (
        <>
            <div className="about_section_wrap">
                <div className="about_wrap" >
                    <div className="content">
                        <h4>Meet Our Educators & Team </h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt nulla inventore,
                            <br></br> officia, adipisci maxime repellat commodi assumenda velit repellendus alias eum culpa aperiam!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, pariatur!</p>
                        <button><a href="#about-wrap">Learn more <i class="fas fa-angle-right"></i></a></button>
                    </div>
                    <div className='team_image'>
                        <img src="Images/about team.svg" alt="uy" />
                    </div>
                </div>
                <div className="ownerwrap">
                    <div className="owner">
                            <img src="./Images/vipul.png" alt="vipul image" />
                    </div>
                    <div className="ownercontent">
                        <h1>Hii, this is <br></br><span>Vipul Chauhan</span></h1>
                        <h3>Web Developer & UI/UX designer, Content Writer </h3>
                        <h3>Founder of edomain ( an Education Website )</h3>

                        <div className='para'>
                        <p>Vipul Chauhan is a Btech second year student at Graphic Era Hill University , Dehradun <br></br> and working as a web developer for last 3 year.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam laborum excepturi.</p>
                        </div>
                        <div className="socialicons">
                            <div className="myicons">
                            <a href="https://wa.me/918279988518"> <i class="fab fa-whatsapp w"></i></a>
                               
                            </div>
                            <div className="myicons">
                            <a href="#"> <i class="fab fa-facebook-f f"></i></a>
 
                               
                            </div>
                            <div className="myicons">
                           
                            <a target="_blank" href="https://www.linkedin.com/in/vipul-kumar01/">  <i class="fab fa-linkedin-in l"></i></a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="ourmission" id='about-wrap'>
                    {/* <img className='waveimg2' src="./Images/wave2.png" alt="wave image" /> */}
                    <div className='mission_content'>
                        <h1  id='title_trii' className='newcolor'>Our Mission</h1>
                        <p>Our mission is to train the world’s workforce in the careers of the future. We partner with leading technology companies to learn how technology is transforming industries, and teach the critical tech skills that companies are looking for in their workforce. With our powerful and flexible digital education platform, even the busiest learners can prepare themselves to take on the most in-demand tech roles.</p>
                        <p>
                            <ul>
                                <li><i class="fas fa-check"></i> Provides high quality content</li>
                                <li><i class="fas fa-check"></i>   Live Interaction</li>
                                <li><i class="fas fa-check"></i> 100% Free study matarial</li>
                                <li><i class="fas fa-check"></i> 24/7 Support</li>
                                <li><i class="fas fa-check"></i> Reach maximum number of student those can't purchase expensive courses</li>
                            </ul>
                        </p>
                    </div>
                    <div className="mission_images">
                        <div className="images left">
                            <div className="image">
                                <img src="./Images/mission image 2.svg" alt="mission images" />
                            </div>
                            <div className="image">
                                <img src="./Images/mission image 1.svg" alt="mission images" />
                            </div>
                        </div>
                        <div className="images right">
                            <div className="image">
                                <img src="./Images/mission image 3.svg" alt="mission images" />
                            </div>
                            <div className="image">
                                <img src="./Images/mission image 4.svg" alt="mission images" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="team_name">
                    <h1>Meet our top educator now !</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi consectetur consequatur ut nihil,<br></br> repellat reiciendis similique dolor, error quis temporibus blanditiis! Culpa officia doloremque perspiciatis odio modi, nobis sed quas.</p>
                </div>
                <div className='about_container'>
                    <div className="a_boxes">
                        <div className="a-box">
                            <div className="a_image">
                                <img src="./Images/team member 1.jpg" alt="team member 1" />
                            </div>
                            <div className="a_content">
                                <h4>Vipul Chauhan</h4>
                                <p id='profile'>Web Developer & UI/UX Designer</p>
                                <p id='profile'>Founder of eDomain</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est culpa perspiciatis provident?</p>

                                <div className='social_icon'>
                                    <div>
                                        <a href="https://www.instagram.com/vidhi___rajput_____/" target="_blank"><i class="fab fa-instagram i"></i></a>
                                    </div>
                                    <div>
                                        <i class="fab fa-facebook f"></i>
                                    </div>
                                    <div>
                                        <a href="https://www.twitter.com/vipulchauhan01/" target="_blank"><i class="fab fa-twitter t"></i></a>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="a-box">
                            <div className="a_content">
                                <h4>Sanaya Chawla</h4>
                                <p id='profile'>Profectional Career coach & Inteviewer</p>
                                <p id='profile'>Co Founder</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est culpa perspiciatis provident?</p>
                                <div className='social_icon'>
                                    <div>
                                        <i class="fab fa-instagram i"></i>
                                    </div>
                                    <div>
                                        <i class="fab fa-facebook f"></i>
                                    </div>
                                    <div>
                                        <i class="fab fa-twitter t" ></i>
                                    </div>
                                </div>
                            </div>
                            <div className="a_image">
                                <img src="./Images/team member 2.jpg" alt="team member 1" />
                            </div>
                        </div>
                    </div>
                    <div className="a_boxes" id='right'>
                        <div className="a-box">
                            <div className="a_content">
                                <h4>Charu Verma</h4>
                                <p id='profile'>Cloud Computing manager</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est culpa perspiciatis provident?</p>
                                <div className='social_icon'>
                                    <div>
                                        <i class="fab fa-instagram i"></i>
                                    </div>
                                    <div>
                                        <i class="fab fa-facebook f"></i>
                                    </div>
                                    <div>
                                        <i class="fab fa-twitter t" ></i>
                                    </div>
                                </div>
                            </div>
                            <div className="a_image">
                                <img src="./Images/team member 3.jpg" alt="team member 1" />
                            </div>
                        </div>
                        <div className="a-box">
                            <div className="a_image">
                                <img src="./Images/team member 4.jpg" alt="team member 1" />
                            </div>
                            <div className="a_content">
                                <h4>Dr. Hemant ShriVastava</h4>
                                <p id='profile'>Health Coach</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est culpa perspiciatis provident?</p>
                                <div className='social_icon'>
                                    <div>
                                        <i class="fab fa-instagram i"></i>
                                    </div>
                                    <div>
                                        <i class="fab fa-facebook f"></i>
                                    </div>
                                    <div>
                                        <i class="fab fa-twitter t" ></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="a_boxes" id='left'>
                        <div className="a-box">
                            <div className="a_image">
                                <img src="./Images/team member 7.jpg" alt="team member 1" />
                            </div>
                            <div className="a_content">
                                <h4>Anmol Bhandari</h4>
                                <p id='profile'>Advance & profectional Coder</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est culpa perspiciatis provident?</p>
                                <div className='social_icon'>
                                    <div>
                                        <i class="fab fa-instagram i"></i>
                                    </div>
                                    <div>
                                        <i class="fab fa-facebook f"></i>
                                    </div>
                                    <div>
                                        <i class="fab fa-twitter t" ></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="a-box">
                            <div className="a_content">
                                <h4>Ridhi Chauhan</h4>
                                <p id='profile'>Cyber Manager</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est culpa perspiciatis provident?</p>
                                <div className='social_icon'>
                                    <div>
                                        <i class="fab fa-instagram i"></i>
                                    </div>
                                    <div>
                                        <i class="fab fa-facebook f"></i>
                                    </div>
                                    <div>
                                        <i class="fab fa-twitter t" ></i>
                                    </div>
                                </div>
                            </div>
                            <div className="a_image">
                                <img src="./Images/team member 6.jpg" alt="team member 1" />
                            </div>
                        </div>
                    </div>
                    <div className="a_boxes" id='left'>
                        <div className="a-box">
                            <div className="a_content">
                                <h4>Dr. Shaili Agarwal</h4>
                                <p id='profile'>Java Developer</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est culpa perspiciatis provident?</p>
                                <div className='social_icon'>
                                    <div>
                                        <i class="fab fa-instagram i"></i>
                                    </div>
                                    <div>
                                        <i class="fab fa-facebook f"></i>
                                    </div>
                                    <div>
                                        <i class="fab fa-twitter t" ></i>
                                    </div>
                                </div>
                            </div>
                            <div className="a_image">
                                <img src="./Images/team member 5.jpg" alt="team member 1" />
                            </div>
                        </div>
                        <div className="a-box">

                            <div className="a_image">
                                <img src="./Images/team member 8.jpg" alt="team member 1" />
                            </div>
                            <div className="a_content">
                                <h4>Harshit Bisth</h4>
                                <p id='profile'>International Business Coach</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est culpa perspiciatis provident?</p>
                                <div className='social_icon'>
                                    <div>
                                        <i class="fab fa-instagram i"></i>
                                    </div>
                                    <div>
                                        <i class="fab fa-facebook f"></i>
                                    </div>
                                    <div>
                                        <i class="fab fa-twitter t" ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
{/* <a href='https://pngtree.com/so/Male'>Male png from pngtree.com/</a> */ }
export default About