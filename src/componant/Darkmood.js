import React from 'react'
import { useState } from 'react'

export const Darkmood = () => {

    const[theme,settheme]=useState('dark');
    const toogleTheme=()=>{
    theme==="dark"?settheme('light'):settheme('dark')
    }
  return[theme,toogleTheme]
}
