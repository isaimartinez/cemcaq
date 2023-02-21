import React from 'react'
import Logo from '../assets/logo.png'

const Header = ({title}) => {
  return (
    <div className='flex flex-row justify-between p-1 h-24 m-5 bg-secondary-dark 	'>
      <div className='flex basis-1/3'>
        <img src={Logo} alt="Logo" className='bg-white rounded m-2 p-2'/>
      </div>
      <div className='flex basis-1/3 items-center justify-center '>
        <p className='text-3xl text-white'>{title}</p>
      </div>
      <div className='flex basis-1/3'/>
    </div>
  )
}

export default Header