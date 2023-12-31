import React from 'react'
import {
    FaDribbblesquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto  py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellendus maiores saepe cumque quos aliquam autem excepturi temporibus praesentium voluptatem similique ab mollitia quibusdam ipsum sapiente eum consectetur, quis laudantium?</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaGithubSquare size={30} />
                <FaTwitterSquare size={30} />
                
            </div>
        </div>
        <div className='lg:col-span-0 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analyics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insight</li>
                </ul>
            </div>

        </div>
        <div className='lg:col-span-0 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400 x'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>eGiudes</li>
                    <li className='py-2 text-sm'>API status</li>
                </ul>
            </div>

        </div>
        <div className='lg:col-span-0 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>
            


        </div>
        
      
    </div>
  )
}

export default Footer
