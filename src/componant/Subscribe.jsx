import React from 'react'
import swal from 'sweetalert'
const Subscribe = (props) => {

    const subsbtn = (event) => {
        swal("Solve it if you are not a Robot [8+7-5]", {
            content: "input",
        })
            .then((value) => {
                if (value == "10") {
                    swal("Subscribed", "Your Activation key is - vipulweb", "success");
                }
                else {
                    swal({

                        text: "Try Again",
                        icon: "error",

                    })
                }
            })

        event.preventDefault();
    }
    const benifit = () => {
        swal("Subscription Benifits", "High Quality Content---> Free Downloads ---> Unlimited Access ---> Free Call Supoort ---> High Security ---> Fast Service ---> HD Animation Slides.");
    }

    return (
        <>
            <div className="subs_wrap">
                <div className="subsbox">
                    <div className='content_box'>
                        <i class="fab fa-ello"></i>
                        <h2>Become Our Happy Subscriber !</h2>
                        <p>Get Unlimited courses for free </p>
                    </div>
                    <form action="" onSubmit={subsbtn}>

                        <div className="inputbox">
                            <div className="inputsec">
                                <i class="fas fa-envelope"></i>
                                <input type="email" required placeholder='Example@gmail.com' minLength={15} />

                            </div>
                            {/* <input type="password" required placeholder='Enter Password' /> */}
                            <button className='subbtn' type='submit'>Subscribe</button>

                        </div>

                    </form>
                    <div className="benifit">
                        <p> <button onClick={benifit}>View</button>benifit to become eDomain Subscriber</p>
                    </div>
                    <img className='waveimg1' src="./Images/wave1.png" alt="wave img" />
                </div>
            </div>
        </>
    )
}

export default Subscribe
