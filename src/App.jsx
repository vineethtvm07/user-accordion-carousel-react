import { useEffect, useState } from 'react';
import './App.css'
import  { fetchData } from '../src/components/Api/api'
import HomePage from './components/home/HomePage'

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    ( async () => { 
      try {
      const response = await fetchData()
      setData(response);
      setLoading(false)
    } catch(err) {
      console.log(err);
    }
    }) ()
  },[])
  console.log(data);
  
  if(loading) {
    <h1>'Loading...'</h1>
  }
  return (
    <>
      <HomePage data={data} setData={setData}/>
      
    </>
  )
}

export default App
