import React from 'react'
import { history } from '../App'
import './menu.css'

export default function menu() {
  return (
    <div className='w-100 contain'>
      <video autoPlay muted loop className='video-background'>
        <source src='./img/videoback.mp4' />
      </video>
      {/* <div className='container-fluid menu'>
        <div className='row intro'>
          <div className='col-12 col-md-5'>
            <p>Helu , Welcome to my present :D , Let enjoy it </p>
          </div>
          <div className='col-12 col-md-7'>
            <img className='avatar' src='./img/backr.jpg' alt='avatar' />
          </div>
        </div>
      </div> */}
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
