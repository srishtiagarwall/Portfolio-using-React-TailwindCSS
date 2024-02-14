import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const Footer = () => {
    const { darkMode } = useDarkMode();

    return (
        <div className={`text-center bg-${darkMode ? 'gray-800' : 'white'}`}>
            <div className='text-center'>
                <h1 className={`text-${darkMode ? 'white' : 'gray-700'} text-4xl py-4 mb-4`}>Follow Me</h1>
            </div>

            <div className='flex justify-center items-center mb-12'>
                <a href="https://www.linkedin.com/in/srishtiagarwal0212/" target="_blank" rel="noopener noreferrer">
                    <i className={`fab fa-linkedin bg-${darkMode ? 'gray-900' : '[#EEF2FF]'} text-${darkMode ? 'white' : 'ternary-dark'} opacity-${darkMode ? '' : '80'} border border-${darkMode ? 'gray-800' : 'gray-300'} rounded-2xl p-2 mx-12`} style={{ fontSize: '2.5rem' }}></i>
                </a>

                <a href="https://github.com/srishtiagarwall" target="_blank" rel="noopener noreferrer">
                    <i className={`fa-brands fa-github bg-${darkMode ? 'gray-900' : '[#EEF2FF]'} text-${darkMode ? 'white' : 'ternary-dark'} opacity-${darkMode ? '' : '80'} border border-${darkMode ? 'gray-800' : 'gray-300'} rounded-2xl p-2 mx-12`} style={{ fontSize: '2.5rem' }}></i>
                </a>

                <a href="https://leetcode.com/SrishtiAgarwal/" target="_blank" rel="noopener noreferrer">
                    <i className={`fa-solid fa-bug bg-${darkMode ? 'gray-900' : '[#EEF2FF]'} text-${darkMode ? 'white' : 'ternary-dark'} opacity-${darkMode ? '' : '80'} border border-${darkMode ? 'gray-800' : 'gray-300'} rounded-2xl p-2 mx-12`} style={{ fontSize: '2.5rem' }}></i>
                </a>
            </div>

            <div className={`text-${darkMode ? 'white' : 'gray-700'} flex justify-center items-center text-center text-lg pb-4 mt-6`}>
                © 2024 React & Tailwind CSS Portfolio. Srishti Agarwal.
            </div>
        </div>
    )
}

export default Footer;