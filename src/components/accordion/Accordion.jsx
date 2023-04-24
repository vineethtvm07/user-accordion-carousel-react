import './accordion.css'
import Data from '../Api/Data'
import { useState } from 'react'
import {ClearOutlined, KeyboardArrowDownOutlined} from '@material-ui/icons'

function Accordion() {
    const path = window.location.replace
    const [tab, setTab] = useState(0);
    const [show, setShow] = useState(false)
    const [items, setItems] = useState(Data)
    
    
  return (
    <div className='container'>
      <div className="accordion">
        <div className="main-title">
          <span> React Interview Questions </span>
          <button onClick={(e) => window.location.replace("/")} 
          className='home-btn'> <ClearOutlined/> </button>
        </div>
        <div className="content-box">
        {items.map((item,id) => (
            <div  className="title-box" key={item.id}>
            <div className="questions">
            <h2> {item?.question} </h2>
            <p className='dropDown-box' onClick={(e)=> {
              setTab(item.id);
              if (tab=== item.id) {
                setShow(!show);
              }else {
                setShow(true)
              }
            }} 
            > <KeyboardArrowDownOutlined className='dropDown-icon' /> </p>
           </div>
           {
            item.id === tab && show === true ? (<div className="answer">
            <p> {item?.answer} </p>
           </div>
            ) :null
           }
           </div>
        ))}
        </div>
       
      </div>
    </div>
  )
}


export default Accordion 
