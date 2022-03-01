import React from 'react'

const Footer = (props) => {
    return (
        <>
            {/* //  <!-- ####################       LEGAL/ FOOTER            #####################  --> */}
{props.theme}
            <section className="legal-section">
                <footer className="footer">
                    <div className="footer-wrap">
                        <a href="#homebar">
                            <div className="logo-trav">
                                <h3>eDomain</h3>
                                <div>
                                    <i class="fab fa-ello"></i>
                                </div>
                            </div>
                        </a>
                        <div className="f-box">
                            <h3>eDomain</h3>
                            <ul>
                                <li><a href="./home">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Offers</a></li>
                                <li><a href="#">Help Desk</a></li>
                            </ul>
                        </div>
                        <div className="f-box">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Courses</a></li>
                                <li><a href="#">Certification Program</a></li>
                                <li><a href="#">Degree</a></li>
                                <li><a href="#">Free Eduaction</a></li>
                                <li><a href="#">Personal Guide</a></li>
                                <li><a href="#">Membership</a></li>

                            </ul>
                        </div>
                        <div className="f-box">
                            <h3>Community</h3>
                            <ul>
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Affiliates</a></li>
                                <li><a href="#">Developers</a></li>
                                <li><a href="#">Instructor</a></li>
                                <li><a href="#">Investors</a></li>
                            </ul>
                        </div>

                        <div className="f-box">
                            <h3>Blog</h3>
                            <ul>
                                <li><a href="./blog.html">PDFs</a></li>
                                <li><a href="./blog.html">Top Courses</a></li>
                                <li><a href="./blog.html">Educators</a></li>
                                <li><a href="./blog.html">Important</a></li>
                            </ul>
                        </div>

                        <div className="f-box">
                            <h3>Legal</h3>
                            <ul>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Ads Policy</a></li>
                                <li><a href="#">Cookies Policy</a></li>
                                <li><a href="">Sitemap</a></li>
                                <li><a href="">Accessiblity Statements</a></li>
                            </ul>
                        </div>

                    </div>
                    <p>Get In Touch</p>
                    {/* <div className="footer">footer linne</div> */}
                    <div className="social-icon">

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
                            <i class="fab fa-twitter icon"></i>
                        </div>
                        <div>
                            <i class="fab fa-pinterest icon"></i>
                        </div>
                        <div>
                            <i class="fab fa-linkedin-in icon"></i>
                        </div>
                    </div>

                    <div className='responsive_social_icon'>

                    </div>
                   
                   
                </footer>

                {/* <!-- ########################                  COPYRIGHTS             ##############  --> */}
                <div className="legal">
                        <div className="copyright">
                            <p> Copyright <span className='copysymbol' dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 
                            2022 All rights reserved | Made by
                             <a  target="_blank" href="https://edomainall.web.app/">
                             <span className='footerwebname'>eDomain</span></a> with <i class="far fa-heart heart-icon"></i> and <i class="fab fa-react mug-icon"></i></p>
                        </div>
                    </div>

            </section>
        </>
    )
}

export default Footer
