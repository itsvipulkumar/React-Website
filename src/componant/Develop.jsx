import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
// import ITData from './ITData';
import DevelopData from './DevelopData';
import CSciencejsfile from '../CSciencejsfile';
// import CSciencejsfile from './CSciencejsfile';
const Develop = () => {
    return (
        <>
           <div className="course_wrap">
                <div className="menutab">
                    <NavLink to='/computerscience'> <button className="btn btn-warning">Computer Scirnce</button></NavLink>
                    <NavLink to='/languages'> <button className="btn btn-warning">Languages</button></NavLink>
                    <NavLink to='/it'> <button className="btn btn-warning">Information Technology</button></NavLink>
                    <NavLink to='/development'> <button className="btn btn-warning">Development</button></NavLink>
                </div>
            </div>

            <div>
        <h1>Development</h1>
      </div>
      <div className='CS_container'>

        <div className="csWrap">
          <CSciencejsfile

            title={DevelopData[0].title}
            image={DevelopData[0].image}
            rating={DevelopData[0].rating}
            time={DevelopData[0].time}
            lecture={DevelopData[0].lecture}
          />

          <CSciencejsfile

            title={DevelopData[1].title}
            image={DevelopData[1].image}
            rating={DevelopData[1].rating}
            time={DevelopData[1].time}
            lecture={DevelopData[1].lecture}

          />
          <CSciencejsfile

            title={DevelopData[2].title}
            image={DevelopData[2].image}
            rating={DevelopData[2].rating}
            time={DevelopData[2].time}
            lecture={DevelopData[2].lecture}
          />
          <CSciencejsfile

            title={DevelopData[3].title}
            image={DevelopData[3].image}
            rating={DevelopData[3].rating}
            time={DevelopData[3].time}
            lecture={DevelopData[3].lecture}
          />

        </div>
      </div>
        </>
    )
}

export default Develop
