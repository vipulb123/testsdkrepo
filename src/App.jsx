import { Routes, Route } from 'react-router-dom'
import Home from './page1'
import About from './page2'
import Menu from './page3'

function App() {
  return (
    <div
     style={{
    width: '385px', // fixed mobile width
    height: '100vh', // full height
    overflow: 'hidden', // ⬅️ prevents scroll inside this box
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
  }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  )
}

export default App
