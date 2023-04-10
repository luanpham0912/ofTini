import React from 'react'
import { Redirect } from 'react-router-dom'
import { history } from '../App'
import './end.css'
export default function End() {
    if(!localStorage.getItem("TOKEN")){
        return <Redirect to = "/"/>
  }
    return (
        <div className='End'>
           
                <div className='endContent'>
                <p className='mb-0 pt-2'>Mong là những thứ nhỏ nhặt này sẽ làm bạn cười :v</p>
                <img src='./img/end.jpg' style={{width : "200px", height : "200px" , objectFit :"cover" ,objectPosition : "left 25%" , borderRadius : "50%"}}/>
                
                </div>
                <p  className='mb-0'>Mãi dễ thương như vầy nữa</p>
                <video muted loop autoPlay className='outtro2'>
                    <source src='./img/outtro.mp4' />
                </video>
                <p  className='mb-0'>Có 1 ngày sinh nhật thật rực rỡ. Dẫy lên nào :vv</p>
                <video muted loop autoPlay className='outtro1'>
                    <source src='./img/outro1.mp4' />
                </video>
                <button className='back' onClick={()=>{
                    history.push('./menu')
                }}>    <h1>Hết Gòi :v</h1> Muốn quay trở lại từ đầu thì bấm ở đây</button>
        </div>  
    )
}
