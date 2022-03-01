import React from 'react'

export const Toogle = ({theme,toogleTheme}) => {

// console.log(theme)

  return (
    <div className='toogletheme' onClick={toogleTheme} >
    {theme==="light"?<i class="fas fa-sun"></i>:<i class="far fa-moon"></i>}
    {/* <h1>Toogle</h1> */}
    {/* <i class="fas-light fas-sun-bright"></i> */}
    {/* <i class="fas fa-chevron-right"></i> */}
    </div>
  )
}
