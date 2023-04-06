import React from 'react'
import './end.css'
export default function End() {
    return (
        <div className='End'>
           
                <div className='endContent'>
                <h1>Hết Gòi :D </h1>
                <p className='mb-0'>Mong là những thứ nhỏ nhặt này sẽ làm bạn cười :v</p>
                <img src='./img/end.jpg' style={{width : "200px", height : "200px" , objectFit :"cover" ,objectPosition : "left 25%" , borderRadius : "50%"}}/>
                
                </div>
                <p  className='mb-0'>Mãi dễ thương như vầy nha :</p>
                <video muted loop autoPlay className='outtro2'>
                    <source src='./img/outtro.mp4' />
                </video>
                <p  className='mb-0'>Và có 1 ngày sinh nhật thật rực rỡ. Dẫy lên nào :vv</p>
                <video muted loop autoPlay className='outtro1'>
                    <source src='./img/outro1.mp4' />
                </video>
           
        </div>
    )
}
