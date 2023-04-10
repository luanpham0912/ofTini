import React from 'react'
import { Redirect } from 'react-router-dom'
import { history } from '../App'
import './flower.css'
export default function Flower() {
  if(!localStorage.getItem("TOKEN")){
    return <Redirect to = "/"/>
}
  return (
    <div className='Flower' >
          <div className='contentFlower'>
          <h1>Tặng bạn bó hoa</h1>
          <img src='./img/flowerr.png' alt='My' className='Ni'/>
          <img src='./img/love2.png' alt='Me' className='Chung'/>
          </div>
          <button className='nextFlower flowerNext' onClick={() => {
                history.push("/message")
            }}><img src='./img/thu.png' className='thu'/></button>
    </div>
  )
}

