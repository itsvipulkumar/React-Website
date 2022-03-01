import React from 'react'
import CSData from './CScienceData'
import CSciencejsfile from './CSciencejsfile'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const CScience = (productitem) => {

  // const {productitem}=Data;

  return (
    <>
      <div  className='c_main_heading'>
        <h1>Computer Science </h1>
      </div>
      <div className='CS_container'>

        <div className="csWrap">
          <CSciencejsfile

            title={CSData[0].title}
            image={CSData[0].image}
            rating={CSData[0].rating}
            time={CSData[0].time}
            lecture={CSData[0].lecture}
            link={CSData[0].link}
          />

          <CSciencejsfile

            title={CSData[1].title}
            image={CSData[1].image}
            rating={CSData[1].rating}
            time={CSData[1].time}
            lecture={CSData[1].lecture}
            link={CSData[1].link}

          />
          <CSciencejsfile

            title={CSData[2].title}
            image={CSData[2].image}
            rating={CSData[2].rating}
            time={CSData[2].time}
            lecture={CSData[2].lecture}
            link={CSData[2].link}
          />
          <CSciencejsfile

            title={CSData[3].title}
            image={CSData[3].image}
            rating={CSData[3].rating}
            time={CSData[3].time}
            lecture={CSData[3].lecture}
            link={CSData[3].link}
          />
        </div>
        <div className="csWrap">
          <CSciencejsfile

            title={CSData[4].title}
            image={CSData[4].image}
            rating={CSData[4].rating}
            time={CSData[4].time}
            lecture={CSData[4].lecture}
            link={CSData[4].link}
          />

          <CSciencejsfile

            title={CSData[5].title}
            image={CSData[5].image}
            rating={CSData[5].rating}
            time={CSData[5].time}
            lecture={CSData[5].lecture}
            link={CSData[5].link}
          />
          <CSciencejsfile

            title={CSData[6].title}
            image={CSData[6].image}
            rating={CSData[6].rating}
            time={CSData[6].time}
            lecture={CSData[6].lecture}
            link={CSData[6].link}
          />
          <CSciencejsfile

            title={CSData[7].title}
            image={CSData[7].image}
            rating={CSData[7].rating}
            time={CSData[7].time}
            lecture={CSData[7].lecture}
            link={CSData[7].link}
          />
        </div>
      </div>
    </>
  )
}


export default CScience
