import React, { useState } from 'react'
import swal from 'sweetalert'
const CSciencejsfile = (props) => {
const clicker=()=>{
    swal({
        text: "Do you have activation key ? ",
        content: "input"
    })
        .then((value) => {
            if (value==='yes'|| value==='Yes'|| value==='y'|| value==='Y') {
                swal("Enter Activation Key ! :", {
                    content: "input",
                })
                    .then((value) => {
                        if (value == 'vipulweb' || value==="Vipulweb") {

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
            if(value==='no'|| value==='No' || value==='n'|| value==='N')
            {
                swal("you dont have activation key, subscribe to get key ")
            }
        })

}
    // const clicker = () => {
    //     let key = prompt("Do you have activation key ?");
    //     if (key == "yes") {
    //         let key1;
    //         key1 = (prompt("Enter Activation key ❤️"))
    //         if (key1 == 'vipulweb') {
    //             window.open(props.link, "_blank");
    //         }
    //         else 
    //         {
    //             swal("Wrong!", "You Activation key is not correct!", "warning");
    //         }
    //     }
    //     if (key == "no") {
    //        let ans=prompt("you dont have activation key for gettin key you need to subscribe our site do you agree (yes or No) and solve it ((5*4)-15+3) format is [yes or no 3]")
    //         if(ans=="yes 8")
    //         {
    //             swal("Subscribed", "Your Activation key is - vipulweb", "success");
    //             // window.alert("Thank You You have Subscribed 😊👍❤️ ");
    //             // alert("You Activation key is -vipulweb");
    //         }
    //         if(ans==="no")
    //         {
    //             // swal("Wrong", "You!", "success");
    //             alert("Thank You ! Your ans is No😏")
    //         }
    //         else if(ans=="yes" || ans!=="yes 8")
    //         {
    //             swal("Wrong!", "Your puzzle answer is wrong!", "error");
    //             //   alert("puzzle wrong ! 👎")
    //         }
           
    //     }
        
    

       
    //                 // let ans = prompt("you dont have activation key for gettin key you need to subscribe our site do you agree (yes or No) and solve it ((5*4)-15+3) format is [yes or no 3]")
    //                 // if (ans == "yes 8") {
    //                 //     swal("Subscribed 😊👍❤️", "Your Activation key is - vipulweb", "success");
    //                 // }
    //                 // if (ans === "no") {
    //                 //     // swal("Wrong", "You!", "success");
    //                 //     alert("Thank You ! Your ans is No😏")
    //                 // }
    //                 // else if (ans == "yes" || ans !== "yes 8") {
    //                 //     swal("Wrong!", "Your puzzle answer is wrong!", "error");
    //                 //     //   alert("puzzle wrong ! 👎")
    //                 // }
        
    //             }

    return (
        <>

            <div className='cards cswrap'>
                <div className="card">
                    <div className='course_img_box'>
                        <img src={props.image} alt="" className="imags" />
                    </div>
                    <div className='CS_content_wrap'>
                        <div>
                            <div className='title_area'>
                                <h1 className="card_title">{props.title}</h1>
                                <p>Free</p>
                            </div>

                            <p className="rating">{props.rating}<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></p>


                            <div className="CS_time">
                                <p> <i class="far fa-clock"></i>{props.time} Hours </p>
                                <p>{props.lecture} Lectures</p>
                            </div>
                        </div>
                        <div className='card_btn' id='CS_btn'>
                            {/* Download Pdf <i class="fas fa-download"></i> */}
                            {/* Download Pdf <i class="fas fa-download"></i> */}
                            <button onClick={clicker}>Download Pdf <i class="fas fa-download"></i></button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CSciencejsfile
