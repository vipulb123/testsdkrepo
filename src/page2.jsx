import React from 'react'
import { useNavigate } from 'react-router-dom'

const pagetwo
 = () => {
     const navigate = useNavigate();
  return (
      <div style={{backgroundColor:'red', textAlign:'center', width:'375px', height:'100vh'}}>
        
        <h1>Page Two</h1>
        <button onClick={()=>{navigate('/menu')}}>Next</button>
    </div>
  )
}

export default pagetwo
