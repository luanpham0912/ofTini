import React, { useRef, useState } from 'react'
import { history } from '../App'
import { ArrowRightOutlined } from '@ant-design/icons';
import './message.css'
let script = `hmmm,..
Để xem nào...Chúc mừng sinh nhật nhé !
Chúc cho những năm tháng sau này luôn
hạnh phúc, một đời an yên.
Mong là vũ trụ sẽ luôn đối đãi dịu 
dàng với cậu. Cũng mong là tôi 
vẫn có thể chúc mừng cậu năm cậu 25 Happy Birthday, Yanghomang!
Luan`;
export default function Message() {
    console.log("first")
    let counter = useRef(0);
    let intervalID = useRef(null)
    console.log("intervalID", intervalID)
    const [content, setContent] = useState(0)

    console.log("nount", content)
    const pause = () =>{
        clearInterval(intervalID.current);
    }
    // if (intervalID.current > script.length) {
        
    // }
    const play = () => {
        if(content > script.length){
            console.log(1123123123123)
        }

        intervalID.current = setInterval(() => {
            // counter.current += 1;
            // console.log(counter.current)

            //   mess.innerHTML = script.substring(0, counter.current);
            //   style.scrollTop = style.scrollHeight;
            //   let nount = script.substring(0, counter.current)



            // console.log("123")
            setContent(prevCount => prevCount + 1)

        }, 90);
    }


    return (
        <div className='message'>
            <p className='text-center p-5'>My birthday card (Click or hover to open it)</p>
            <div className="card" onMouseEnter={()=>{play()}} onMouseLeave={()=>{pause()}}>
                <div className="imgBox">
                    <div className="bark" />
                    {/* <img src="https://image.ibb.co/fYzTrb/lastofus.jpg" /> */}
                    <img src="./img/card.jpg" />

                </div>
                
                <div className="details">
                <h4 className="Title color2">(HAPPY BIRTHDAY)</h4>
                    
                   
                    <p id='mess'>
                        {script.substring(0, content)}
                    </p>
                    {/* <p>hmmm,..</p>
                    <p>Để xem nào...</p>
                    <p>Chúc mừng sinh nhật nhé !</p>
                    <p>Chúc cho những năm tháng sau này luôn</p>
                    <p>hạnh phúc, một đời an yên.</p>
                    <p>Mong là vũ trụ sẽ luôn đối đãi dịu </p>
                    <p>dàng với cậu. Cũng mong là tôi </p>
                    <p>vẫn có thể chúc mừng cậu năm cậu 25</p>
                    <p className="text-right">Happy Birthday, Yanghomang!</p>
                    <p className="text-right">Luan</p> */}

                </div>
            </div>

            <button className='nextFlower' onClick={() => {
                history.push("/roll")
            }}>Continute...</button>
        </div>

    )

}
