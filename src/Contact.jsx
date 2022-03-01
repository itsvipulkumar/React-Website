import React from 'react'
// import { useLocation } from 'react-router-dom';

const Contact = () => {
    // const location =useLocation();
    return (
        <>
            <div className='contact_O_box'>
                <div className="contact_wrap">
                    <div className="left_content">
                        <h3>Connect with us ! </h3>
                        <form action="https://formspree.io/f/xjvlwndg" method='post' className='contact_form'>
                            <div className="namesection">
                                <div>
                                    <label htmlFor="" for="name">Name</label>
                                    <input autoComplete='off' required type="text" name="name" id="name" placeholder='Enter your name' />
                                </div>
                                <div>
                                    <label htmlFor="" for="email">Email</label>
                                    <input autoComplete='off' type="email" name="email" id="email" placeholder='Enter your E-Mail' />
                                </div>
                            </div>
                            <div className='text_area'>
                                <label htmlFor="" for="massage">Enter your massage</label>
                                {/* <input type="email" name="" id="massage" placeholder='Ent' /> */}
                                <textarea name="massage" id="massage" cols="30" rows="8" ></textarea>
                            </div>
                            <button type='submit'>Send <i class="fa fa-send-o"></i></button>
                        </form>
                    </div>
                    <div className="right_content">
                        <h3>Reach us</h3>
                        <div className="reach_boxs">
                            <div className="reach_box">
                                <h4> <i class="fas fa-map-marker-alt"></i> Address</h4>
                                <p>Ashima Vihar <br></br>Subhash Nagar, Dehradun, Uttarakhand 248002</p>
                            </div>
                            <div className="reach_box">
                                <h4> <i class='fa fa-phone'></i>Phone</h4>
                                <p>+91 8279988518 OR +91823217862</p>

                            </div>
                            <div className="reach_box">
                                <h4> <i class='fa fa-envelope'></i>Mail</h4>
                                <p>itsvipulkumar02@gmail.com</p>

                            </div>
                            <div className="reach_box">
                                <h4> <i class='fa fa-globe'></i> Website</h4>
                                <a href="https://edomainall.web.app/" target="_blank">https://edomainall.web.app/</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
