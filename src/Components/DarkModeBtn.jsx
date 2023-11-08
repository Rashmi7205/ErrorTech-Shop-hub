import React from 'react';
import {MdDarkMode} from 'react-icons/md';
import {BsFillBrightnessAltLowFill} from 'react-icons/bs';


function DarkModeBtn({isBright,onclick}) {
  return (
        <button type='button'
        className={`font-bold text-3xl p-2  fixed top-[80vh] right-4  rounded-full ${!isBright?"bg-slate-500 text-white":"bg-white text-black"} transition-all duration-1000 ease-in-out `}
        onClick={onclick}
        >
        {
            isBright?<BsFillBrightnessAltLowFill/>:<MdDarkMode/>
        }
        </button>
  )
}

export default DarkModeBtn