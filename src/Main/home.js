import React, { useState } from 'react'
import './home.css'
import Axios from 'axios'
import { history } from '../App'
import { Notificantion, openNotification } from '../notification/notiFunc'
import { Alert, Button, notification } from 'antd'
export default function Home() {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  const [acc, setAcc] = useState({
    taiKhoan : '',
    matKhau : ''
  })
  console.log( acc)

  const handleSubmit = (e) =>{
    e.preventDefault()
    let promise = Axios({
        url : `https://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangNhap`,
        method : 'POST',
        data : {...acc}
    })
    promise.then((res)=>{
      console.log("res",res)
      if(res.status === 200){
         localStorage.setItem("TOKEN" , res.data.content.accessToken)
         history.push('/menu')
      }
    })
    promise.catch((err)=>{
      console.log(err.response)
      Notificantion("error","Thử trả lời lại đáp án khác nha :v")

    })
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
