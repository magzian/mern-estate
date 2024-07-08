import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-100 shadow-md'>
        <div className='flex justify-between items-center p-4'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Real</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center '>
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-500 '/>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'><li className='hidden sm:inline text-slate-700 hover:text-slate-500'>Home </li></Link>
            <Link to='/about'><li className='hidden sm:inline text-slate-700 hover:text-slate-500'>About</li></Link>
            <Link to='/sign-in'><li className=' sm:inline text-slate-700 hover:text-slate-500'>Sign In</li></Link>
        </ul>
        </div>
    </header>   
  )
}
