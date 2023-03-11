import React, {useEffect} from 'react'
import { Routes, Route} from 'react-router-dom'
import {Home, Details} from './pages'

function App() {
  useEffect(() => {
    // Load All Stations data
  }, [])
  
  return (
    <div>
      <div className='flex relative dark:bg-main-dark-bg select-none'>
        <div className='bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen'>
          <div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/estaciones/:id" element={<Details />}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
