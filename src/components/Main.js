import React from 'react';
import image1 from '../components/images/Lowcode development-bro.svg';
import image2 from '../components/images/Lowcode development-bro1.svg';
import About from './About';
import Techstack from './Techstack';
import { useDarkMode } from '../context/DarkModeContext';

const Main = () => {
    const { darkMode } = useDarkMode();

    return (
        <div className={`container bg-${darkMode ? 'gray-800' : 'white'} pt-20`}>
            <div className='flex flex-row justify-between items-center ms-48'>
                <div className='text-left'>
                    <h1 className={`font-sans font-bold text-3xl text-left text-${darkMode ? 'white' : 'ternary-dark'} opacity-${darkMode ? '' : '70'}`}>HI, I'M</h1>
                    <h1 className={`font-sans font-bold text-3xl text-left text-${darkMode ? 'white' : 'ternary-dark'} opacity-${darkMode ? '' : '70'}`}>SRISHTI AGARWAL</h1>
                    <h1 className={`font-sans font-medium text-3xl text-left text-${darkMode ? 'black' : ''} opacity-${darkMode ? '' : '50'} mt-4`}>A MERN Stack Developer</h1>
                    <h1 className={`font-sans font-medium text-3xl text-left text-${darkMode ? 'black' : ''} opacity-${darkMode ? '' : '50'}`}>& Design Enthusiast</h1>

                    <div className='mt-20'>
                        <a href="https://drive.google.com/file/d/1OE-kzSJ1CMbNJQZpCZaT0UXF8oDLTjwE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <span className={`text-${darkMode ? 'white' : '[#6B7280]'} text-bold bg-${darkMode ? 'gray-900' : 'gray-300'} hover:bg-${darkMode ? 'gray-700' : 'gray-400'} border border-${darkMode ? 'gray-800' : 'gray-300'} duration-150 w-12 px-12 py-2 rounded-lg cursor-pointer`}>
                                Download Resume
                            </span>
                        </a>
                    </div>
                </div>

                <div className='w-[50%] h-full text-right float-right me-40'>
                    <img src={darkMode ? image2 : image1} alt="Developer" />
                </div>
            </div>

            <About darkMode={darkMode} />
            <Techstack darkMode={darkMode} />
        </div>
    )
}

export default Main;