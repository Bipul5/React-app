import React from 'react'
import Single from '../images/single.png';
import Double from '../images/double.png';
import Triple from '../images/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounderd-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single user</h2>
                <p className='text-center text-4l font-bold'>INR 149</p>
                <div className='text-center  font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB STORAGE</p>
                    <p className='py-2 border-b mx-8'>1 GRanted user</p>
                    <p className='py-2 border-b mx-8'>Send upto 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md  font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
            </div>
            <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounderd-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Double user</h2>
                <p className='text-center text-4l font-bold'>INR 249</p>
                <div className='text-center  font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1000 GB STORAGE</p>
                    <p className='py-2 border-b mx-8'>2 Granted user</p>
                    <p className='py-2 border-b mx-8'>Send upto 5 GB</p>
                </div>
                <button className='bg-[#b4c7c1] w-[200px] rounded-md  font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounderd-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>many user</h2>
                <p className='text-center text-4l font-bold'>INR 449</p>
                <div className='text-center  font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>2000 GB STORAGE</p>
                    <p className='py-2 border-b mx-8'>5 Granted user</p>
                    <p className='py-2 border-b mx-8'>Send upto 50 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md  font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
            </div>
        </div>  
    </div>
  )
}

export default Cards
