import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const Stack = ({ tech }) => {
    const { darkMode } = useDarkMode();

    return (
        <div className={`bg-${darkMode ? 'gray-900' : 'white'} text-${darkMode ? 'white' : 'ternary-dark'} rounded-lg shadow-2xl p-8 m-8 relative overflow-hidden flex justify-center items-center`}>
            <div>
                <h5 className="text-2xl text-ternary-dark opacity-70">{tech}</h5>
            </div>
        </div>
    )
}

export default Stack;