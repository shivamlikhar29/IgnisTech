import React from 'react'
import { useState } from 'react'

import Heart from '../assets/heart.png'
import Red from '../assets/red.png'


import Download from '../assets/download.png'

const Main = () => {
    const [like, setLike] = useState(false)

    function handleLike(){
        setLike(!like)
        console.log("hello")
    }
    return (
        <div className=''>
            <div className='flex pt-32 pl-96'>
                <p className='font-black text-secondary-700 text-6xl'>Likes</p>
            </div>


            <div className='flex pl-96 pt-10'>
                <div className='flex'>
                    <img className='text-center h-40 w-80 rounded-2xl' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="photo" />
                    <div style={{ width: "40rem" }} className='flex flex-col justify-between pl-10 w-96 text-wrap'>
                        <p className='text-secondary-700 font-bold text-xl'>TItle asdsadasd zxl;ckzx;lckz;l</p>
                        <p className='text-secondary-400 text-sm'>Monday data and time 12:00pm</p>
                        <p className='text-secondary-400 text-sm'>Starts at $999</p>
                        <span style={{ paddingTop: "3rem" }} className='text-end text-wrap'>
                            <img className='inline px-5 h-6' src={Download} />
                            <button onClick={handleLike}> {like ? <img className='inline h-6' src={Heart}/> : <img style={{height:"0.93rem"}} className='inline h-6' src={Red} /> } </button> 
                        </span>
                    </div>
                </div>
            </div>

            <div className='flex pl-96 pt-10'>
                <div className='flex'>
                    <img className='text-center h-40 w-80 rounded-2xl' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="photo" />
                    <div style={{ width: "40rem" }} className='flex flex-col justify-between pl-10 w-96 text-wrap'>
                        <p className='text-secondary-700 font-bold text-xl'>TItle asdsadasd zxl;ckzx;lckz;l</p>
                        <p className='text-secondary-400 text-sm'>Monday data and time 12:00pm</p>
                        <p className='text-secondary-400 text-sm'>Starts at $999</p>
                        <span style={{ paddingTop: "3rem" }} className='text-end text-wrap'>
                            <img className='inline px-5 h-6' src={Download} />
                            <button onClick={handleLike}> {like ? <img className='inline h-6' src={Heart}/> : <img style={{height:"0.93rem"}} className='inline' src={Red} /> } </button> 
                        </span>
                    </div>
                </div>
            </div>

            
           

        </div>
    )
}

export default Main
