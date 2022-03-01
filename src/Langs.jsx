import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import LData from './LData';
import CSciencejsfile from './CSciencejsfile';
const Langs = () => {
  return (
    <>
      {/* data  */}
      <div  className='c_main_heading'>
        <h1>Languages</h1>
      </div>
      <div className='CS_container'>

        <div className="csWrap">
          <CSciencejsfile

            title={LData[0].title}
            image={LData[0].image}
            rating={LData[0].rating}
            time={LData[0].time}
            lecture={LData[0].lecture}
            link={LData[0].link}
          />

          <CSciencejsfile

            title={LData[1].title}
            image={LData[1].image}
            rating={LData[1].rating}
            time={LData[1].time}
            lecture={LData[1].lecture}
            link={LData[1].link}

          />
          <CSciencejsfile

            title={LData[2].title}
            image={LData[2].image}
            rating={LData[2].rating}
            time={LData[2].time}
            lecture={LData[2].lecture}
            link={LData[2].link}

          />
          <CSciencejsfile

            title={LData[3].title}
            image={LData[3].image}
            rating={LData[3].time}
            lecture={LData[3].lecture}
            link={LData[3].link}

          />
        </div>
        <div className="csWrap">
          <CSciencejsfile

            title={LData[4].title}
            image={LData[4].image}
            rating={LData[4].rating}
            time={LData[4].time}
            lecture={LData[4].lecture}
            link={LData[4].link}

          />

          <CSciencejsfile

            title={LData[5].title}
            image={LData[5].image}
            rating={LData[5].rating}
            time={LData[5].time}
            lecture={LData[5].lecture}
            link={LData[5].link}

          />
          <CSciencejsfile

            title={LData[6].title}
            image={LData[6].image}
            rating={LData[6].rating}
            time={LData[6].time}
            lecture={LData[6].lecture}
            link={LData[6].link}

          />
          <CSciencejsfile

            title={LData[7].title}
            image={LData[7].image}
            rating={LData[7].rating}
            time={LData[7].time}
            lecture={LData[7].lecture}
            link={LData[7].link}

          />
        </div>
      </div>
    </>
  )
}

export default Langs
