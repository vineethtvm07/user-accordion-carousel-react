import { useEffect, useState } from 'react'
import './homepage.css'
import UserList from '../Userlist/UserList';
import Axios from 'axios'
import Accordion from '../accordion/Accordion';
import Carousel from '../carousel/Carousel';

function HomePage({data, setData}) {
    const path = window.location.pathname
        

        if (path === "/userlist") {
            return <UserList data={data} setData={setData}/>;
        }else if(path === "/accordion") {
            return <Accordion />
        }else if(path === "/carousel") {
            return <Carousel /> 
        }
    
  return (
    <div className="container">
        <div className='home'>
            <div className="title">
                <h1>Welcome</h1>
                <div className="btn-box">
                    <button className='link-btn' 
                    onClick={((e) => location.replace('/userlist'))}>User List
                    </button>
                    <button className='link-btn' 
                    onClick={(e) => location.replace('/accordion')}>Accordion FAQ
                    </button>
                    <button className='link-btn' onClick={()=>location.replace('/carousel')}>Carousel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage;
