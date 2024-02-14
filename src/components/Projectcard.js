import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const Projectcard = ({ image, title }) => {
    const { darkMode } = useDarkMode();

    return (
        <div className={`bg-${darkMode ? 'gray-900' : 'white'} text-${darkMode ? 'white' : 'ternary-dark'} rounded-lg shadow-2xl p-4 m-8`}>
            <img src={image} className="w-[70%] ps-16" alt="..." />

            <div>
                <h5 className="text-4xl text-ternary-dark opacity-70">{title}</h5>
            </div>

            <span className={`text-${darkMode ? 'white' : '[#6B7280]'} bg-${darkMode ? 'gray-700' : '[#EEF2FF]'} inline-block rounded-lg m-4`}><a href="#" className="p-8">Know More</a></span>
        </div>
    )
}

export default Projectcard;