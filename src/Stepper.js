import React from 'react'

const Stepper = () => {
    return (
        <div className='mt-20 flex items-center justify-center'>
           <div className='mr-8'>
            <div className='w-6 h-6 mb-1 bg-green-500 text-white px-2'>
                <p className=''>1</p>
                </div>
                <div className='text-white text-sm text-center'>
                ACCOUNT SETUP
                </div>
            </div>
            <div className='mr-8'>
            <div className='w-6 h-6 mb-1 bg-white text-gray-400 px-2'>
                <p className=''>2</p>
                </div>
                <div className='text-white text-sm text-center'>
                SOCIAL PROFILES
                </div>
            </div>
            <div>
            <div className='w-6 h-6 mb-1 bg-white text-gray-400 px-2'>
                <p className=''>3</p>
                </div>
                <div className='text-white text-sm text-center'>
                PERSONAL DETAILS
                </div>
            </div>
        </div>
    )
}

export default Stepper