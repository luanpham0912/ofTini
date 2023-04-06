import React, { useEffect, useState } from 'react'
import { history } from '../App'
import './roll.css'
export default function Roll() {
    const [deg , setDeg] = useState(0)
    const [flag , setFlag] = useState(true)

    var spins = 0
    const rollWheel = () => {
        spins++;
        console.log("first",spins)
        // var randDegree = Math.floor(Math.random() * 1800) + 1;
    var totalDegree = 360*5 + deg;
        setDeg( totalDegree )
        setTimeout(()=>{
            setFlag(false)
        },5600)
    }
    useEffect(() => {
        window.addEventListener('click',()=>{
            setFlag(true)
        })
    }, [])
    
    return (
        <div className='roll'>
            <div className='outer-container'>
                <h1 className='wish'> Your present will be... </h1>
                <div className='contaner'>
                    <div className='arrow'>

                    </div>
                    <div className='wheel' style={{transform : `rotate(${deg}deg)`}}>
                        <div className='inner-wheel' id='wheel'>
                            <div className='section'>
                                <span className='b-day'>Mystery box</span>
                            </div>
                            <div className='section'>
                                <span className='b-day'>Me :D</span>
                            </div>
                            <div className='section' id='love'>
                                <span className='b-day'>Supper car</span>
                            </div>
                            <div className='section'>
                                <span className='b-day'>Diamond</span>
                            </div>
                            <div className='section'>
                                <span className='b-day ' >Travel around TW</span>
                            </div>
                            <div className='section'>
                                <span className='b-day'>Penthouse in Dalat</span>


                            </div>
                        </div>
                        <div className='spin-button' onClick={()=>{
                            rollWheel()
                        }}></div>

                    </div>
                </div>
            </div>
            <div className='popupGift' style={{display : flag ? "none" : "block"}}>
                <h1>Chúc mừng bạn đã trúng được phần quà là Mystery box</h1>
                <p>
                Mystery box của năm nay là 1 vé Vip bên mình :D.
                Với vé Vip này bạn có thể yêu cầu bất cứ thứ gì từ Luan, chỉ cần nằm trong khả năng là được
                <small style={{display:"block"}}>(vd: tìm người chạy deadline cùng, tìm người thảo luận các vấn đề về học thuật, đời sống, tìm người đi xem phim cùng, đi hít khói đếm đèn đường cùng,...vv)</small>
                Để sử dụng quà bạn hãy gửi đoạn code bên dưới gửi chatbox của Luan 
                <p> HSD : không giới hạn , cho đến khi phá sản.</p>
                <i style={{fontSize:"12px"}}>Lưu ý : Vé chỉ áp dụng được 1 lần duy nhất</i>
                </p>
                <div className='code'>2113</div>
            </div>
            <button className='nextFlower' onClick={() => {
                history.push("/end")
            }}>Continute...</button>
        </div>
    )
}
// .outer-container
// h1.wish - Wishing you -
// .container
//   .arrow
//   .wheel
//     .inner-wheel#wheel
//       .section
//         span.b-day Happy Birthday!
//       .section
//         span.vertical.joy O
//       .section#love
//         span.fa.fa-heart.pulse
//       .section
//         span.adventure New Adventures
//       .section
//         span.vertical.fun U
//       .section
//         span.lots lots of
//         span.fa.fa-birthday-cake
//     .spin-button
// .overlay
// h1
//   | I love
//   br
//   | you berrrry
//   br
//   | much
// .cherry-container-1
//   .cherry
//     .leaf
// .cherry-container-2
//   .cherry
//     .leaf
// .cherry-container-3
//   .cherry
//     .leaf
// .cherry-container-4
//   .cherry
//     .leaf
// .cherry-container-5
//   .cherry
//     .leaf
// .cherry-container-6
//   .cherry
//     .leaf
// .cherry-container-7
//   .cherry
//     .leaf

// .cherry-container-8
//   .cherry
//     .leaf

// .cherry-container-9
//   .cherry
//     .leaf


