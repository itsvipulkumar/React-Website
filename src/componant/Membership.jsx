import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Paydata from './Paydata';
import swal from 'sweetalert'
const Membership = (props) => {
    const location=useLocation();
 const freezone =()=>{
     swal("Bydefault you're in this plan.")
 }

    return <>
        <div className="memwrap">
            <div className="memberhead">
                <div id="mainhead">
                    <h1>Become our primium member and get ultimate benifits </h1>
                    <button><a href="#mem-learnmore">Learn More <i class="fas fa-chevron-right"></i></a></button>
                    <img className='waveimg1member' src="./Images/wave1.png" alt="wave img membership" />
                </div>
                <div className="heading" id='mem-learnmore'>
                    <h1 id='title_sec'>Premium member benifits</h1>
                    <a href="#buymembership">Buy Membership</a>
                </div>

                <div className="benifits">
                    <div className="benifit">
                        <img src="./Images/benifit img 1.png" alt="benifit images" />
                        <h4>Best Educator at all the time</h4>
                        <p>You can access any video and download as well.</p>
                    </div>
                    <div className="benifit">
                        {/* <i class="fab fa-youtube"></i> */}
                        <img src="./Images/benifit img 2.png" alt="benifit images" />
                        <h4>Guaranty and verfied content</h4>
                        <p>You can access any video and download as well.</p>
                    </div>
                </div>
                <div className="benifits">
                    <div className="benifit">
                        <img src="./Images/benifit img 3.png" alt="benifit images" />

                        <h4>Unlimited Access thousands of videos</h4>
                        <p>You can access any video and download as well.</p>
                    </div>
                    <div className="benifit">
                        <img src="./Images/benifit img 4.png" alt="benifit images" />
                        <h4>Very Beautiful & Simple Interface</h4>
                        <p>You can access any video and download as well.</p>
                    </div>
                </div>
                <div className="benifits">
                    <div className="benifit">
                        <img src="./Images/benifit img 5.png" alt="benifit images" />

                        <h4>24/7 call & chat Support</h4>
                        <p>You can access any video and download as well.</p>
                    </div>
                    <div className="benifit">
                        <img src="./Images/benifit img 6.png" alt="benifit images" />

                        <h4>Unlimited free downloads</h4>
                        <p>You can access any video and download as well.</p>
                    </div>
                </div>
            </div>
            <div className="mboxes" id='buymembership'>
                <div className="mbox">
                    <div className="head">
                        <h1>Free</h1>
                        <p><i class="fas fa-rupee-sign"></i> {Paydata[0].amount} </p>
                    </div>
                    <div className="mcontent">
                        <div className="mfeature">
                            <ul>
                                <li><i class="fas fa-check"></i> Free PDF</li>
                                <li><i class="fas fa-check"></i> upto 10 PDF downloads</li>
                                <li><i class="fas fa-check"></i> Call support</li>
                                <li><i class="fas fa-check"></i> Share activation key</li>
                            </ul>
                        </div>
                        <div className="mbutton">
                            <button onClick={freezone} >BUY</button>
                        </div>
                    </div>
                </div>
                <div className="mbox midbox">
                    <div className="head">

                        <h1>Premium</h1>
                        <p><i class="fas fa-rupee-sign"></i> {Paydata[1].amount} </p>
                    </div>
                    <div className="mcontent">
                        <div className="mfeature">
                            <ul>
                                <li><i class="fas fa-check"></i> Free PDF</li>
                                <li><i class="fas fa-check"></i> upto 10 PDF downloads</li>
                                <li><i class="fas fa-check"></i> Call support</li>
                                <li><i class="fas fa-check"></i> Share activation key</li>
                                <li><i class="fas fa-check"></i> Better UI</li>
                                <li><i class="fas fa-check"></i> Live Classes</li>
                                <li><i class="fas fa-check"></i> Video Lecture</li>
                                <li><i class="fas fa-check"></i> Quality Teacher</li>
                            </ul>
                        </div>
                        <div className="mbutton">
                            <NavLink ans={Paydata[1].amount} exact to='/membership/premium'><button value={Paydata[1].amount} >BUY</button></NavLink>
                        </div>
                    </div>
                </div>
                <div className="mbox">
                    <div className="head">
                        <h1>Advance</h1>
                        <p><i class="fas fa-rupee-sign"></i> {Paydata[2].amount} </p>
                    </div>
                    <div className="mcontent">
                        <div className="mfeature">
                            <ul>
                                <li><i class="fas fa-check"></i> Free PDF</li>
                                <li><i class="fas fa-check"></i> upto 10 PDF downloads</li>
                                <li><i class="fas fa-check"></i> Call support</li>
                                <li><i class="fas fa-check"></i> Share activation key</li>
                                <li><i class="fas fa-check"></i> Better UI</li>
                                <li><i class="fas fa-check"></i> Live Classes</li>
                                <li><i class="fas fa-check"></i> Video Lecture</li>
                                <li><i class="fas fa-check"></i> Quality Teacher</li>
                                <li><i class="fas fa-check"></i> Ultimate access</li>
                            </ul>
                        </div>
                        <div className="mbutton">
                        <NavLink ans={Paydata[2].amount} exact to='/membership/advance'><button value={Paydata[2].amount} >BUY</button></NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Membership;
