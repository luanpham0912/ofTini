import React, { useEffect, useRef, useState } from 'react'
import './home.css'
import Axios from 'axios'
import { history } from '../App'
import { Notificantion, openNotification } from '../notification/notiFunc'
import { Alert, Button, notification } from 'antd'
export default function Home(props) {

  const [acc, setAcc] = useState({
    taiKhoan : '',
    matKhau : ''
  })
  const [myAcc] = useState({
    taiKhoan : 'yanghomang',
    matKhau : '26/02'
  })
  const timerID = useRef()

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(acc.taiKhoan === myAcc.taiKhoan && acc.matKhau === myAcc.matKhau){
      console.log("true")
      localStorage.setItem("TOKEN" , "anhnhoemlam")
      history.push('/menu')
      if(timerID.current){
          clearTimeout(timerID.current)
      }
      timerID.current = setTimeout(()=>{
        props.toggle()
      },500)
    }else{
      console.log("false")
      Notificantion("error","Thử trả lời lại đáp án khác nha :v")
    }
   
  }
  const handleChange = (e) =>{
     const {name , value} = e.target
     setAcc({...acc,[name] : value})
  }
  return (
    <div className='contain' style={{backgroundImage : 'url("./img/pink.jpg")' , height : "100vh",  backgroundPosition : "center"}}>
    
        
        <form className='form-login' onSubmit={handleSubmit}>
           <h6> Đăng nhập để xác nhận đây là TíNị :D </h6>
           <label>Biệt danh trên mạng là: </label>
           <input type='text' className='username' name='taiKhoan' placeholder='yan***m*ng' onChange={handleChange}/> 
           <label className='mt-3'>ngày, tháng sinh âm lịch là: </label>
           <input type='password' className='password' name='matKhau' placeholder='dd/mm' onChange={handleChange}/> 
           <button className='mt-5' type='submit' >Đăng nhập</button>
        </form>
    </div>
  )
}
