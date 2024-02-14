import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const Contact = () => {
    const { darkMode } = useDarkMode();

    return (
        <div className={`bg-${darkMode ? 'gray-800' : 'white'} text-${darkMode ? 'white' : 'ternary-dark'} flex justify-center items-center h-screen`}>
            <div className={`border border-${darkMode ? 'gray-700' : ''} shadow-2xl rounded-2xl w-[50%] py-12 ps-12 pe-8`}>

                <h1 className={`text-center text-4xl text-${darkMode ? 'white' : 'ternary-dark'}  opacity-${darkMode ? '' : '70'}`}>
                    Contact Details
                </h1>

                <div className={`text-xl  opacity-${darkMode ? '' : '60'} mt-12`}>
                    <i class='fa-solid fa-phone me-8'></i>
                    <span>+91 96503 53197</span>
                </div>
                
                <div className={`text-xl  opacity-${darkMode ? '' : '60'} mt-12`}>
                    <i class="fa-solid fa-envelope me-8"></i>
                    <span>agarwal11srishti@gmail.com</span>
                </div>

                <div className={`text-xl  opacity-${darkMode ? '' : '60'} mt-12`}>
                    <i className="fa-solid fa-location-dot me-8"></i>
                    <span>SK-122, Shastri Nagar, Ghaziabad, Uttar Pradesh, 201002</span>
                </div>
            </div>
        </div>
    )
}

export default Contact;