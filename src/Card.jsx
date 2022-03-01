import React, { useState } from 'react'
import swal from 'sweetalert'
import CardData from './CardData'
const Card = (props) => {
    const clicker = () => {


        swal({
            text: "Do you have activation key ? ",
            content: "input"
        })
            .then((value) => {
                if (value==="yes" || value==='Yes'|| value==='Y'|| value==='y') {
                    swal("Enter Activation Key ! :", {
                        content: "input",
                    })
                        .then((value) => {
                            if (value == 'vipulweb'|| value==="Vipulweb") {

                                swal({
                                    title: "Accepted",
                                    text: "Are you sure to download your file ! ",
                                    icon: "success",
                                    buttons: true,
                                    // button: "Aww yiss!",
                                    dangerMode: true,
                                })
                                    .then((willDelete) => {
                                        if (willDelete) {
                                            window.open(props.link, "_blank")
                                        } else {
                                            // window.open(props.link, "_blank");
                                            swal("Your File is not download");
                                        }
                                    });
                            }
                            else {
                                swal("Wrong!", "You Activation key is not correct!", "warning");
                            }

                        });
                }
                if(value==='no' || value==='No'|| value==='N'|| value==='n')
                {
                    swal("you dont have activation key, subscribe to get key ")
                }
            })


        // swal("Do you have activation key ?",
        //     {
        //         content: "input",
        //     })
        //     .then((value) => {
        // if (value == "yes") {

        // }
        // else
        // {
        //     alert("get key")
        // }


    }

    return (
        <>

            <div className='cards'>
                <div className="card">
                    <div className='course_img_box'>
                        <img src={props.img} alt="" className="imags" />
                    </div>
                    <div className="card_content">
                        <div>
                            <h1 className="card_title">{props.title}</h1>
                            <p className="card_desp">{props.descrip}</p>
                        </div>
                        <div className='card_btn'>
                            {/* <a href="#course_section">click</a> */}
                            <button onClick={clicker}>Download Pdf <i class="fas fa-download"></i></button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card
