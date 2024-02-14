import React from 'react';
import Stack from './Stack';
import { useDarkMode } from '../context/DarkModeContext';

const Techstack = () => {
    const { darkMode } = useDarkMode();

    return (
        <div className={`container flex flex-col justify-center items-center text-${darkMode ? 'white' : 'gray-700'} pb-32 mx-auto`}>
            <h1 className={`text-${darkMode ? 'white' : 'gray-700'} text-5xl text-center pt-20 pb-12 mb-4`}>
                Tech Stack
            </h1>

            <div className='grid grid-cols-4 text-center'>
                <Stack tech='C++/DSA' darkMode={darkMode} />
                <Stack tech='HTML' darkMode={darkMode} />
                <Stack tech='CSS' darkMode={darkMode} />
                <Stack tech='Tailwind CSS' darkMode={darkMode} />
                <Stack tech='JavaScript' darkMode={darkMode} />
                <Stack tech='Bootstrap' darkMode={darkMode} />
                <Stack tech='JQuery' darkMode={darkMode} />
                <Stack tech='React.js' darkMode={darkMode} />
                <Stack tech='Node.js' darkMode={darkMode} />
                <Stack tech='Express.js' darkMode={darkMode} />
                <Stack tech='MongoDB' darkMode={darkMode} />
                <Stack tech='SQL' darkMode={darkMode} />
            </div>
        </div>
    )
}

export default Techstack;