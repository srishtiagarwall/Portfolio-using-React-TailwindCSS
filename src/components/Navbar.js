import React from 'react';
import logo1 from '../components/images/Free_Sample_By_Wix1.jpg';
import logo2 from '../components/images/Free_Sample_By_Wix2.jpg';
import { useDarkMode } from '../context/DarkModeContext';

const Navbar = () => {
    const { darkMode, setDarkMode } = useDarkMode();
    
    const switchMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className={`bg-${darkMode ? 'gray-900' : 'gray-100'} h-24 flex justify-around items-center px-4`}>
            <div>
                <img className="h-14" src={darkMode ? logo2 : logo1} alt='logo' href="/" />
            </div>

            <div className="flex items-center justify-center space-x-4">
                <a className={`font-general-medium text-lg text-${darkMode ? 'white' : 'black'} hover:text-${darkMode ? 'gray-300' : 'gray-600'}  p-5`} href="/projects">Projects</a>
                <a className={`font-general-medium text-lg text-${darkMode ? 'white' : 'black'} hover:text-${darkMode ? 'gray-300' : 'gray-600'}  p-5`} href="/">About</a>
                <a className={`font-general-medium text-lg text-${darkMode ? 'white' : 'black'} hover:text-${darkMode ? 'gray-300' : 'gray-600'}  p-5`} href="/contact">Contact</a>
            </div>

            <div className="flex justify-between items-center space-x-4 p-3 cursor-pointer">
                <a className={`text-md font-general-medium bg-${darkMode ? 'gray-900' : '[#7E57C2]'} hover:bg-${darkMode ? 'gray-700' : '[#6E35D5]'} duration-150 text-white border border-${darkMode ? 'gray-700' : ''} rounded-lg px-5 py-2.5 m-3`} href="/hireme">Hire Me!</a>
                <i className={`fa-solid fa-${darkMode ? 'sun' : 'moon'} bg-${darkMode ? 'gray-900' : '[#7E57C2]'} hover:bg-${darkMode ? 'gray-700' : '[#6E35D5]'} duration-150 text-white border border-${darkMode ? 'gray-700' : ''} rounded-xl p-3`} onClick={switchMode}></i>
            </div>
        </nav>
    )
}

export default Navbar;