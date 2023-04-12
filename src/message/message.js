import React, { useRef, useState } from 'react'
import { history } from '../App'
import { ArrowRightOutlined } from '@ant-design/icons';
import './message.css'
import { Redirect } from 'react-router-dom';
let script = `Hmmm,...Để xem nào...Chúc mừng sinh nhật nhé !
Chúc cậu những năm tháng của sau này luôn hạnh phúc, một đời an yên. 
Mong là vũ trụ sẽ đối đãi dịu dàng hơn với cậu. Cũng mong là tôi 
vẫn có thể chúc mừng cậu năm cậu 25. Happy Birthday, Yanghomang!
- Luan - `;
export default function Message() {
    let intervalID = useRef(null)
 
    const [content, setContent] = useState(0)
    const pause = () =>{
        clearInterval(intervalID.current);
    }
    // if (intervalID.current > script.length) {
        
    // }
    const play = () => {
        if(content > script.length){
            console.log(1123123123123)
            clearInterval(intervalID.current);

        }

       

        intervalID.current = setInterval(() => {
            // counter.current += 1;
            // console.log(counter.current)

            //   mess.innerHTML = script.substring(0, counter.current);
            //   style.scrollTop = style.scrollHeight;
            //   let nount = script.substring(0, counter.current)



            // console.log("123")
            setContent(prevCount => prevCount + 1)

        }, 110);
    }

    if(!localStorage.getItem("TOKEN")){
        return <Redirect to = "/"/>
  } 
    return (
        <div className='message'>
            <p className='text-center p-5 title'>(Click or hover to open/close it)</p>
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
