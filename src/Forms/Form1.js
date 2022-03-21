import React from 'react'
import Stepper from '../Stepper'

const Form1 = () => {
    return (
        <div>
            <Stepper/>

        <div className='flex justify-center mt-8'>
            <div className='bg-white w-96 h-96 rounded-md '>
            <p className='text-slate-500 text-center mt-6 text-lg tracking-wide'>CREATE YOUR ACCOUNT</p>
            <p className='text-slate-500 text-center mt-2'>This is step 1</p>
            <form className='mt-6 mx-12'>
                <input type='email' placeholder='Email' className='mt-1 mb-4 px-3 py-2 border w-72 rounded-sm focus:outline-none focus:border-sky-500' />
                <input type='password' placeholder='Password' className='mt-1 mb-4 px-3 py-2 border w-72 rounded-sm focus:outline-none focus:border-sky-500' />
                <input type='password' placeholder='Confirm Password' className='mt-1 mb-4 px-3 py-2 border w-72 rounded-sm focus:outline-none focus:border-sky-500' />
                <button className='mt-2 mx-24 text-white bg-green-500 hover:bg-green-500/75 px-8 py-2 rounded-sm'>Next</button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default Form1