import React from 'react'
// import DatabaseData from '../CScienceData'
import DatabaseData from './DatabaseData';
// import CSciencejsfile from '../CSciencejsfile'
import CSciencejsfile from '../CSciencejsfile';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Database = (productitem) => {

  // const {productitem}=Data;
{/* <DatabaseData/> */}
  return (
    <>
      <div  className='c_main_heading'>
        <h1>Database </h1>
      </div>
      <div className='CS_container'>

        <div className="csWrap">
          <CSciencejsfile

            title={DatabaseData[0].title}
            image={DatabaseData[0].image}
            rating={DatabaseData[0].rating}
            time={DatabaseData[0].time}
            lecture={DatabaseData[0].lecture}
            link={DatabaseData[0].link}
          />

          <CSciencejsfile

            title={DatabaseData[1].title}
            image={DatabaseData[1].image}
            rating={DatabaseData[1].rating}
            time={DatabaseData[1].time}
            lecture={DatabaseData[1].lecture}
            link={DatabaseData[1].link}

          />
          <CSciencejsfile

            title={DatabaseData[2].title}
            image={DatabaseData[2].image}
            rating={DatabaseData[2].rating}
            time={DatabaseData[2].time}
            lecture={DatabaseData[2].lecture}
            link={DatabaseData[2].link}
          />
          <CSciencejsfile

            title={DatabaseData[3].title}
            image={DatabaseData[3].image}
            rating={DatabaseData[3].rating}
            time={DatabaseData[3].time}
            lecture={DatabaseData[3].lecture}
            link={DatabaseData[3].link}
          />
        </div>
        <div className="csWrap">
          <CSciencejsfile

            title={DatabaseData[4].title}
            image={DatabaseData[4].image}
            rating={DatabaseData[4].rating}
            time={DatabaseData[4].time}
            lecture={DatabaseData[4].lecture}
            link={DatabaseData[4].link}
          />

          <CSciencejsfile

            title={DatabaseData[5].title}
            image={DatabaseData[5].image}
            rating={DatabaseData[5].rating}
            time={DatabaseData[5].time}
            lecture={DatabaseData[5].lecture}
            link={DatabaseData[5].link}
          />
          <CSciencejsfile

            title={DatabaseData[6].title}
            image={DatabaseData[6].image}
            rating={DatabaseData[6].rating}
            time={DatabaseData[6].time}
            lecture={DatabaseData[6].lecture}
            link={DatabaseData[6].link}
          />
          {/* <CSciencejsfile

            title={DatabaseData[7].title}
            image={DatabaseData[7].image}
            rating={DatabaseData[7].rating}
            time={DatabaseData[7].time}
            lecture={DatabaseData[7].lecture}
            link={DatabaseData[7].link}
          /> */}
        </div>
      </div>
    </>
  )
}


export default Database
