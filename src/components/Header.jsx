import React from 'react'
import Logo from '../assets/logo.png'

const Header = ({title}) => {
  return (
    <div className='flex flex-row justify-between w-full h-24 m-1 border-b-1 border-slate-200	'>
      <div className='flex basis-1/3 '>
        <img src={Logo} alt="Logo"/>
      </div>
      <div className='flex basis-1/3 items-center justify-center '>
        <p className='text-3xl'>{title}</p>
      </div>
      <div className='flex basis-1/3'/>
    </div>
  )
}

export default Header