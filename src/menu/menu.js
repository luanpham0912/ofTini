import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { history } from '../App'
import './menu.css'

export default function Menu() {

  if(!localStorage.getItem("TOKEN")){
    return <Redirect to = "/"/>
}

  return (
    <div className='w-100 contain'>
      
      <video  muted loop autoPlay className='video-background' id='videoBack'>
        <source src='./img/videoback.mp4' type='video/mp4'/>
      </video>
      <div className='content'>
         <h1>Helu, Welcome to my Gift </h1>
         <p>Many interesting things are waiting for you :D</p>
         <button type='button' onClick={()=>{
          history.push("/bake")
         }}>Let's Enjoy</button>
      </div>
    </div>
  )
}
