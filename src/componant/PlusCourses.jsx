import React from 'react';

const PlusCourses = () => {
  return <>
    <div className="plusCWrap">
      <div className="welcome">
        <h1>A very Welcome to enter our premium courses</h1>
        <button><a href="#goto">Learn More <i class="fas fa-chevron-right"></i></a></button>
        <img className='pluswrapwave' src="../Images/wave1.png" alt="plusmember wave img" />
      </div>
      <section >
        <div className="inner1">
          <img src="../Images/plus member img 1.svg" alt="benifit images" />

          {/* <img src="D:\react_tuto\reactvipul\public\Images\plus member img 1.svg" alt="images" /> */}
        </div>
      </section>

      <div className="goto" id='goto'>
        <div className="gotoheading">
          <h1 id='titleforth' >Explore Our Premium courses <i class="fas fa-crown"></i></h1>
        </div>
        <div className="gotocontent">
          <div className="left">
            <h4 > <i class="fas fa-caret-right"></i> <a href="#webdev">Web Development</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#appdev">Andriod Development</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Java</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">C</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">C++</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Python</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">SQL</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">PHP</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">DBMS</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Scala</a> </h4>
          </div>
          <div className="left">
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Data Science</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">IOT</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Big Data</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Artificail Intelligence</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Block Chain</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Virtual Reality and Argumented Reality</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Cyber Security</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Machine Learning</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Automation</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Analytics</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Cloud Computing</a> </h4>
          </div>
          <div className="left">
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Data Science</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">IOT</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Big Data</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Artificail Intelligence</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Block Chain</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Virtual Reality and Argumented Reality</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Cyber Security</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Machine Learning</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Automation</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Analytics</a> </h4>
            <h4> <i class="fas fa-caret-right"></i> <a href="#">Cloud Computing</a> </h4>
          </div>
          <div className="right">
            <img src="../Images/goto student img.svg" alt="student image" />
          </div>
        </div>
      </div>
      <section>
        <div className="pluscontent">
          <div className="chead">
            <div id='webdev' className="webdevHead">
              <h1>Web Development</h1>
              <img src="../Images/web dev icon.png" alt="" />
            </div>
            <p>Web development is the work involved in developing a website for the Internet or an intranet.
              Web development can range from developing a simple single static page of plain text to complex
              web applications, electronic businesses, and social network services</p>
            <div className="inner2">
              <img src="../Images/web dev img.svg" alt="benifit images" />
            </div>
            <div className="videos">
              <iframe src="https://www.youtube.com/embed/bV5EM4g4-ak" allow="accelerometer; autoplay=1; mute=1; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>
            </div>
            <div className="videos">
            <iframe width="1350" height="480" src="https://www.youtube.com/embed/7haUGbaZoVw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="videos">
            <iframe width="1350" height="480" src="https://www.youtube.com/embed/kbLgioLPLnw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="chead">
            <div id='appdev' className="webdevHead">
              <h1>App Development</h1>
              <img src="../Images/app dev icon.png" alt="" />
            </div>
            <p>App Development refers to the creation of computer applications for 
            use on mobile devices such as tablets, smartphones and smart watches. ... Mobile applications are designed and built for different operating systems and
             developers will want to learn how to build for both the Android operating system and Apple's iOS.</p>
            <div className="inner2">
              <img src="../Images/appdev.svg" alt="benifit images" />
            </div>
            <div className="videos">
              <iframe width="1350" height="480" src="https://www.youtube.com/embed/roDz8mMvbIg?list=PLknSwrodgQ72X4sKpzf5vT8kY80HKcUSe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="videos">
              <iframe width="1350" height="480" src="https://www.youtube.com/embed/EOfCEhWq8sg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="chead">
            <div className="webdevHead">
              <h1>Business Development</h1>
              <img src="../Images/web dev icon.png" alt="" />
            </div>
            <p>Web development is the work involved in developing a website for the Internet or an intranet.
              Web development can range from developing a simple single static page of plain text to complex
              web applications, electronic businesses, and social network services</p>
            <div className="inner2">
              <img src="../Images/web dev img.svg" alt="benifit images" />
            </div>
            <div className="videos">
              <iframe src="https://www.youtube.com/embed/bV5EM4g4-ak" allow="accelerometer; autoplay=1; mute=1; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>
            </div>
          </div>

        </div>
      </section>

    </div>
  </>;
};

export default PlusCourses;
