import React from 'react'
import Logo from '../assets/logo.png'

import {useNavigate} from 'react-router-dom'

const Header = ({title}) => {
  const navigate = useNavigate()



  const goToHome = () => {
    navigate(`/`)
  }
  return (
    <div className='flex flex-row justify-between p-1 h-24 m-5 bg-secondary-dark rounded'>
      <div className='flex basis-1/3 cursor-pointer' onClick={goToHome}>
        <img src={Logo} alt="Logo" className='bg-white rounded m-2 '/>
      </div>
      <div className='flex basis-1/3 items-center justify-center '>
        <p className='text-3xl text-white'>{title}</p>
      </div>
      <div className='flex basis-1/3'/>
    </div>
  )
}

export default Header