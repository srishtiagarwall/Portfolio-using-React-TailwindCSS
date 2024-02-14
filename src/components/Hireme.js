import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const Hireme = () => {
    const { darkMode } = useDarkMode();

    return (
        <div className={`bg-${darkMode ? 'gray-800' : 'white'} text-${darkMode ? 'white' : 'ternary-dark'} flex justify-center items-center h-screen`}>
            <div className={`border border-${darkMode ? 'gray-700' : ''} shadow-2xl rounded-2xl w-[50%] p-8`}>
                <h1 className={`text-center text-4xl text-${darkMode ? 'white' : 'ternary-dark'}  opacity-${darkMode ? '' : '70'}`}>
                    Contact Form
                </h1>

                <div className="form-floating mt-12 mb-8">
                    <span className="input-group-text me-4">Full name :</span>
                    <input type="text" className={`form-control bg-${darkMode ? 'gray-900' : ''} border border-${darkMode ? 'gray-700' : ''} rounded-md px-2`} aria-label="Full name" placeholder="Enter your full name" />
                </div>

                <div className="form-floating mb-8">
                    <label htmlFor="floatingInput" className='me-4'>Email address :</label>
                    <input type="email" className={`form-control bg-${darkMode ? 'gray-900' : ''} border border-${darkMode ? 'gray-700' : ''} rounded-md px-2`} id="floatingInput" placeholder="Enter your email" />

                </div>

                <div className="form-floating mb-8">
                    <span className="input-group-text me-4">Subject :</span>
                    <input type="text" className={`form-control bg-${darkMode ? 'gray-900' : ''} border border-${darkMode ? 'gray-700' : ''} rounded-md px-2`} aria-label="Subject" placeholder="Enter subject" />
                </div>

                <div className="input-group mb-8">
                    <span className="input-group-text me-4">Message :</span>
                    <textarea className={`form-control bg-${darkMode ? 'gray-900' : ''} border border-${darkMode ? 'gray-700' : ''} rounded-md px-2`} aria-label="With textarea" placeholder="Enter your message"></textarea>
                </div>
            </div>
        </div>
    )
}

export default Hireme;