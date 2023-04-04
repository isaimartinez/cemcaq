import React from 'react'
import { Routes, Route} from 'react-router-dom'
import {Home, Details, Pollutant} from './pages'
import { useSelector } from 'react-redux'

function App() {
  const {currentMode} = useSelector((state) => state.view)

  return (
    <div className={currentMode === "Dark" ? 'dark' : ''}>
      <div className='flex  relative  select-none'>
        <div className='bg-secondary dark:bg-secondary-dark  w-full min-h-screen'>
          <div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/estaciones/:id" element={<Details />}/>
              <Route path="/estaciones/:id/:pollutant" element={<Pollutant />}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
