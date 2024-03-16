import React from 'react'
import searchIcon from '../assets/searchIcon.jpg'
import { useState } from 'react';


const Navbar = () => {
    const [user, setUser] = useState(false);

    return (
      <div className='pt-3'>
        <div className='flex space justify-between'>
          <ul className='inline-flex items-center justify-center'>
            <li className='px-14 font-black text-red-400 text-3xl font-sans'>eventbrite</li>
            <li>
            <img className='h-6 w-6 min-h-6 min-w-6' src={searchIcon} alt='searchbar' />
            </li>
            <li className='px-2'><input name="firstName" placeholder='Search for events' /></li>
          </ul>
          <ul className='inline-flex justify-center items-center font-semibold'>
            <li className='px-7 text-secondary-700 cursor-pointer'>Browse Events</li>
            <li className='px-7 text-secondary-700 cursor-pointer'>Host an Event</li>
            <li className='px-7 text-secondary-700 cursor-pointer'>Help</li>
            { user ?
            <><li>
                <img className='rounded-full w-6 h-6 min-h-6 min-w-6 ' src='https://static.vecteezy.com/system/resources/previews/002/002/403/large_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'></img>
              </li><li className='px-1 pr-12 text-secondary-700'>xxx@gmail.com</li></>
            : <> <li className='px-7 text-secondary-700 cursor-pointer'>Log In</li>
            <li className='px-7 text-secondary-700 cursor-pointer'>Sign Up</li></> }
          </ul>
        </div>
      </div>
   )

}

export default Navbar


