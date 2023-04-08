import React, { useEffect, useRef, useState } from 'react'
import './home.css'
import Axios from 'axios'
import { history } from '../App'
import { Notificantion, openNotification } from '../notification/notiFunc'
import { Alert, Button, notification } from 'antd'
export default function Home(props) {

  const [acc, setAcc] = useState({

    matKhau : ''
  })
  const [myAcc] = useState({
  
    matKhau : '26/02'
  })
  const timerID = useRef()  
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(acc.matKhau === myAcc.matKhau){
      console.log("true")
      localStorage.setItem("TOKEN" , "anhnhoemlam")
      history.push('/menu')
      if(timerID.current){
          clearTimeout(timerID.current)
      }
      timerID.current = setTimeout(()=>{
        props.toggle()
      },1000)
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
    <div className='contain' style={{backgroundImage : 'url("./img/pink.jpg")' , height : "100vh",  backgroundPosition : "center"}} >
    
        
        <form className='form-login' onSubmit={handleSubmit}>
           <h6> Trả lời câu hỏi để xác nhận đây là TíNị :D </h6>
           <label className='mt-3'>Ngày, tháng sinh âm lịch là: </label>
           <input type='password' className='password' name='matKhau' placeholder='dd/mm' onChange={handleChange}/> 
           <button className='mt-5' type='submit' >Đăng nhập</button>
        </form>
    </div>
  )
}
// onClick={()=>{playVid()}}
