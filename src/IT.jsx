import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import ITData from './ITData';
import CSciencejsfile from './CSciencejsfile';
const IT = () => {
  return (
    <>
      {/* <div className="course_wrap">
        <div className="menutab">
          <NavLink to='/computerscience'> <button className="btn btn-warning">Computer Scirnce</button></NavLink>
          <NavLink to='/languages'> <button className="btn btn-warning">Languages</button></NavLink>
          <NavLink to='/it'> <button className="btn btn-warning">Information Technology</button></NavLink>
          <NavLink to='/development'> <button className="btn btn-warning">Development</button></NavLink>

        </div>
      </div> */}

      <div className='c_main_heading'>
        <h1>Information Technology</h1>
      </div>
      <div className='CS_container'>

        <div className="csWrap">
          <CSciencejsfile

            title={ITData[0].title}
            image={ITData[0].image}
            rating={ITData[0].rating}
            time={ITData[0].time}
            lecture={ITData[0].lecture}
          />

          <CSciencejsfile

            title={ITData[1].title}
            image={ITData[1].image}
            rating={ITData[1].rating}
            time={ITData[1].time}
            lecture={ITData[1].lecture}

          />
          <CSciencejsfile

            title={ITData[2].title}
            image={ITData[2].image}
            rating={ITData[2].rating}
            time={ITData[2].time}
            lecture={ITData[2].lecture}
          />
          <CSciencejsfile

            title={ITData[3].title}
            image={ITData[3].image}
            rating={ITData[3].rating}
            rating={ITData[3].time}
            lecture={ITData[3].lecture}
          />
        </div>
        <div className="csWrap">
          <CSciencejsfile

            title={ITData[4].title}
            image={ITData[4].image}
            rating={ITData[4].rating}
            time={ITData[4].time}
            lecture={ITData[4].lecture}
          />

          <CSciencejsfile

            title={ITData[5].title}
            image={ITData[5].image}
            rating={ITData[5].rating}
            time={ITData[5].time}
            lecture={ITData[5].lecture}
          />
          <CSciencejsfile

            title={ITData[6].title}
            image={ITData[6].image}
            rating={ITData[6].rating}
            time={ITData[6].time}
            lecture={ITData[6].lecture}
          />
          <CSciencejsfile

            title={ITData[7].title}
            image={ITData[7].image}
            rating={ITData[7].rating}
            time={ITData[7].time}
            lecture={ITData[7].lecture}
          />
        </div>
      </div>
    </>
  )
}

export default IT
