import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Switch ,NavLink} from 'react-router-dom';
import Home from './Home';
// import About from './Courses';
import Contact from './Contact';
import ProfeCourse from './ProfeCourse';
import SignIn from './SignIn';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CScience from './CScience';
// import La from './Langs';
import Langs from './Langs';
import Courses from './Courses';
import IT from './IT';
import Footer from './componant/Footer';
import Develop from './componant/Develop';
import StatusBar from './componant/StatusBar';
import Subscribe from './componant/Subscribe';
import About from './About';
import Database from './CourseContainer/Database';
import Membership from './componant/Membership';
import Premium from './componant/Premium';
import PlusCourses from './componant/PlusCourses';
import Signup from './componant/Signup';
import Enroll from './componant/Enroll';
import Enrollment from './componant/Enrollment';
import JustDemo from './JustDemo';
import Advance from './componant/Advance';


const App = () => {


// console.log(theme);

  return (
    <>
    {/* <StatusBar/> */}
    <Navbar/>
     <div className='page_size '>
       <Switch>
         <Route exact path='/' component={Home} ></Route>
         <Route exact path='/courses' component={Courses} ></Route>
         <Route exact path='/contact' component={Contact} ></Route>
         <Route exact path='/coures_details' component={Contact} ></Route>
         <Route exact path='/signin' component={SignIn} ></Route>
         <Route exact path='/membership' component={Membership} ></Route>
         <Route exact path='/computerscience' component={CScience} ></Route>
         <Route exact path='/course/database' component={Database} ></Route>
         <Route exact path='/languages' component={Langs} ></Route>
         <Route exact path='/it' component={IT} ></Route>
         <Route exact path='/development' component={Develop} ></Route>
         <Route exact path='/course/subscribe' component={Subscribe} ></Route>
         <Route exact path='/about' component={About} ></Route>
         {/* === membership ==== */}
         <Route exact path='/membership/premium' component={Premium} ></Route>
         <Route exact path='/membership/advance' component={Advance} ></Route>
         <Route exact path='/signin/pluscourses' component={PlusCourses} ></Route>
         <Route exact path='/signup' component={Signup} ></Route>
         {/* <Route exact path='/membership/enroll' component={Enroll} ></Route> */}
         <Route exact path='/membership/enrollment' component={Enrollment} ></Route>
         <Route  to='' component={Error} ></Route>
       </Switch>
       
     </div> 
     <Footer/>
     {/* <JustDemo/> */}
     {/* <Navbar/> */}
    </>
  )
}

export default App
