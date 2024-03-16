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
                    <img className='text-center h-40 w-80 rounded-2xl' src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1701348426%2Fo2alnbsgdzgdopfymy9d.png" alt="photo" />
                    <div style={{ width: "40rem" }} className='flex flex-col justify-between pl-10 w-96 text-wrap'>
                        <p className='text-secondary-700 font-bold text-xl'>Mega Vibe Fest</p>
                        <p className='text-secondary-400 text-sm'>Live on Saturday</p>
                        <p className='text-secondary-400 text-sm'>Starts at $50</p>
                        <span style={{ paddingTop: "3rem" }} className='text-end text-wrap'>
                            <img className='inline px-5 h-6' src={Download} />
                            <button onClick={handleLike}> {like ? <img className='inline h-6' src={Heart}/> : <img style={{height:"0.93rem"}} className='inline h-6' src={Red} /> } </button> 
                        </span>
                    </div>
                </div>
            </div>

            <div className='flex pl-96 pt-10'>
                <div className='flex'>
                    <img className='text-center h-40 w-80 rounded-2xl' src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-surat-color-fest-0-2024-2-28-t-5-52-22.jpg" alt="photo" />
                    <div style={{ width: "40rem" }} className='flex flex-col justify-between pl-10 w-96 text-wrap'>
                        <p className='text-secondary-700 font-bold text-xl'>Surat Color Fest</p>
                        <p className='text-secondary-400 text-sm'>Starts on 20th March</p>
                        <p className='text-secondary-400 text-sm'>Starts at $100</p>
                        <span style={{ paddingTop: "3rem" }} className='text-end text-wrap'>
                            <img className='inline px-5 h-6' src={Download} />
                            <button onClick={handleLike}> {like ? <img className='inline h-6' src={Heart}/> : <img style={{height:"0.93rem"}} className='inline' src={Red} /> } </button> 
                        </span>
                    </div>
                </div>
            </div>

            <div className='flex pl-96 pt-10'>
                <div className='flex'>
                    <img className='text-center h-40 w-80 rounded-2xl' src="https://siam2nite.media/zRIZaV1bY78534HjesI3tjOt9gA=/1280x720/smart/magazine/articles/1041/meta_2efa52235905a8f9dfea2870c261af59.jpg" alt="photo" />
                    <div style={{ width: "40rem" }} className='flex flex-col justify-between pl-10 w-96 text-wrap'>
                        <p className='text-secondary-700 font-bold text-xl'>Fit Fest at Central Mall</p>
                        <p className='text-secondary-400 text-sm'>On 15th October Monday</p>
                        <p className='text-secondary-400 text-sm'>Starts at $59</p>
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
