import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
     const navigate = useNavigate();
  return (
    <div style={{backgroundColor:'blue', textAlign:'center', width:'375px', height:'100vh'}}>
        
        <h1>Page One</h1>
        <button onClick={()=>{navigate('/about')}}>Next</button>
    </div>
    
  )
}

export default Home;