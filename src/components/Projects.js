import React from 'react';
import Projectcard from './Projectcard';
import i1 from '../components/images/Weather-cuate.svg';
import i2 from '../components/images/Organizing projects-amico.svg';
import i3 from '../components/images/People watching the news-pana.svg';
import i4 from '../components/images/News-bro.svg';
import i5 from '../components/images/www-amico.svg';
import i6 from '../components/images/Notes-rafiki.svg';
import { useDarkMode } from '../context/DarkModeContext';

const Projects = () => {
    const { darkMode } = useDarkMode();

    return (
        <div className={`text-center bg-${darkMode ? 'gray-800' : 'white'} pb-44`}>
            <h1 className={`text-${darkMode ? 'white' : 'gray-700'} text-5xl pt-20 pb-12 mb-4`}>Projects portfolio</h1>


            <div className='grid grid-cols-3'>
                <Projectcard image={i1} title='Weather Forecast' darkMode={darkMode} />
                <Projectcard image={i2} title='Calendar App' darkMode={darkMode} />
                <Projectcard image={i3} title='Netflix Clone' darkMode={darkMode} />
                <Projectcard image={i4} title='News App' darkMode={darkMode} />
                <Projectcard image={i5} title='URL-Shortner' darkMode={darkMode} />
                <Projectcard image={i6} title='Notes App' darkMode={darkMode} />
            </div>
        </div>
    );
};

export default Projects;