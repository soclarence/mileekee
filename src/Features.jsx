import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Features(props) {

    useEffect(()=>{
        Aos.init({
            offset: 100,
            duration: 1000,
            delay: 100
        })
    },[])

  return (
    <div className={`${props.background} p-11 h-fit rounded-xl`} data-aos="zoom-in">
        <div className="flex flex-col space-y-5">
            <div className={`${props.color} rounded-md w-16 h-16 flex items-center justify-center`}>
                <img src={props.icon} alt="" />
            </div>
            <h3 className='font-medium text-2xl'>{props.header}</h3>
            <p className="font-normal">{props.body}</p>
        </div>
    </div>
  )
}
