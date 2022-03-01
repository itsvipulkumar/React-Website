import React from 'react'
import CardData from './CardData';
import Card from './Card';
import Course from './Courses';
import OurFeature from './OurFeature';
import Collab from './Collab';
import Service from './componant/Service';
import SavetimeBox from './SavetimeBox';
import Subscribe from './componant/Subscribe';
import APPtemp from './APPtemp';
import Footer from './componant/Footer';
// import Collab from './componant/Collab';
// import { useLocation } from 'react-router-dom';

const Home = () => {
    // const location = useLocation();
    // conso
    return (
        <>
            <div className='homepage' id='homebar' >
                <div className='home_title'>
                    <div className='web_tag'>
                        <h1>Learn without <br></br><span>leaving home </span></h1>

                        <a href='#explorenow' ><button className='explore_btn' variant="contained">Get Started <i class="fas fa-long-arrow-alt-right"></i></button></a>
                    </div>
                    <div className='home_img' >
                        {/* https://cdn.pixabay.com/photo/2019/02/05/07/52/pixel-cells-3976295_960_720.png */}
                        <img className='main_home_img' src="./Images/home img 2.svg" alt="home image" />
                    </div>
                </div>
            </div>
            <APPtemp/>

            <Subscribe/>
            {/* <SavetimeBox/> */}
            <div className='demand_course'  >
                <div id='explorenow' className='program_title' >
                    <h1 id='title'>Our most demandable cousre and Program </h1>
                </div>
                <div className='course_program'>
                   <div className="tablet">
                   <Card
                        img={CardData[0].img}
                        title={CardData[0].title}
                        descrip={CardData[0].descrip}
                        link={CardData[0].link}
                    />
                    <Card
                        img={CardData[1].img}
                        title={CardData[1].title}
                        descrip={CardData[1].descrip}
                        link={CardData[1].link}
                    />
                   </div>
                   <div className="tablet">
                        <Card
                        img={CardData[2].img}
                        title={CardData[2].title}
                        descrip={CardData[2].descrip}
                        link={CardData[2].link}
                    />
                    <Card
                        img={CardData[3].img}
                        title={CardData[3].title}
                        descrip={CardData[3].descrip}
                        link={CardData[3].link}
                    />
                   </div>
                </div>
            </div>
            <Service/>
            <OurFeature/>
            {/* <Footer/> */}

        </>
    )
}
export default Home
