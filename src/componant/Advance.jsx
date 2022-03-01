import React from 'react';
import swal from 'sweetalert'
import Paydata from './Paydata';
import Membership from './Membership';
const Advance = (props) => {
    const paymentdone = (e) => {
        e.preventDefault();
        swal({
            title: "INR 11999.00 Paid",
            text: "Your payment has been success",
            icon: "success",
            button: "Proceed",
        })

            .then((value) => {
                swal({
                    // title: "Paid",
                    text: "Your username : vipul ,   your password : vipul@123",
                    // icon: "success",
                    button: "Next",
                })
                    // window.location.href = '/membership/enrollment'
                    // swal(`The returned value is: ${value}`);
                    .then((value) => {

                        window.location.href = '/membership/enrollment'
                        // swal(`The returned value is: ${value}`);
                    });
            });



    }
    return <>
        <form action="" className='paymentform' onSubmit={paymentdone}>
            {/* {Paydata[0].amount} */}
            {/* {props.value} */}
            <div className="paymentcard">
                <div className="price">
                    <h1>Total Amount</h1>
                    <h2><i class="fas fa-rupee-sign"></i> {Paydata[2].amount}</h2>
                </div>
                <div className="pinfo">
                    <div className="">
                        <label htmlFor=""><i class="fas fa-user"></i> Account Holder</label>
                        <input type="text" required placeholder='Your Name' />
                    </div>
                    <div className="">
                        <label htmlFor=""><i class="fas fa-envelope"></i> Email</label>
                        <input type="email" required placeholder='example@gmail.com' minLength='14' />
                    </div>
                </div>
                {/* <div className="verify">
                    <input type="date" />
                    <div>
                        <div className="">
                            <input type="radio" name='gen' value='male' />
                            <label htmlFor="" for="male">Male</label>
                        </div>
                        <div>
                            <input type="radio" name='gen' value='female' />
                            <label htmlFor="" for="female">Female</label>
                        </div>
                    </div>
                </div> */}
                <div className="carddetails">
                    <div className='cardnumber'>
                        <label htmlFor=""><i class="fas fa-credit-card"></i> Card Number</label>
                        <input type="text" name="" id="" required placeholder='0000 0000 0000 0000' minLength='16' maxLength='19' />
                    </div>
                    <div className="exp">
                        <div>
                            <label htmlFor="">CVC/CVV</label>
                            <input type="text" required placeholder='123' maxLength='3' minLength='3' />
                        </div>
                        <div>

                            <div className="expiredate">
                                <label htmlFor="">Expiry Date <i class="fas fa-calendar-alt"></i></label>
                                <div>
                                    <input type="text" placeholder='MM' maxLength='2' minLength='2' required />
                                    <input type="text" placeholder='YY' maxLength='4' minLength='2' required />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="confirm">
                    <button >Confirm and Pay <i class="fas fa-long-arrow-alt-right"></i></button>
                </div>
            </div>
        </form>
    </>;
};

export default Advance;
