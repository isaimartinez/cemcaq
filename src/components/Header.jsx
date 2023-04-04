import React from 'react'
import Logo from '../assets/logo.png'
import { FaSun, FaMoon} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {setCurrentMode} from '../redux/reducers/viewSlice'

const Header = ({title}) => {
  const navigate = useNavigate()
  const {currentMode} = useSelector((state) => state.view)
  const dispatch = useDispatch()

  const handleChangeMode = () => {
    if(currentMode == "Dark") {
      dispatch(setCurrentMode("Light"))
    } else {
      dispatch(setCurrentMode("Dark"))
    }
  }



  const goToHome = () => {
    navigate(`/`)
  }
  return (
    <div className='flex bg-main dark:bg-main-dark flex-row justify-between p-1 h-24 m-5  rounded'>
      <div className='flex basis-1/3 cursor-pointer' onClick={goToHome}>
        <img src={Logo} alt="Logo" className='bg-neutral-50 rounded m-2 '/>
      </div>
      <div className='flex basis-1/3 items-center justify-center '>
        <p className='text-3xl text-zinc-800 dark:text-neutral-50'>{title}</p>
      </div>
      <div className='flex basis-1/3  items-center justify-end'>
        <button type='button' className='flex m-2 text-zinc-800 dark:text-neutral-50' onClick={handleChangeMode}>
            {
              currentMode == "Dark" ? (
                <FaSun size={35}/>
              ) : (<FaMoon  size={35}/>)
            }
          </button>
      </div>
    </div>
  )
}

export default Header