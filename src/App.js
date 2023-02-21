import React from 'react'
import { Routes, Route} from 'react-router-dom'
import {Dashboard, Details} from './pages'

function App() {
  return (
    <div>
      <div className='flex relative dark:bg-main-dark-bg select-none'>
        <div className='bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen'>
          <div>
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/estaciones/:id" element={<Details />}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
