import React from 'react';
import image from '../components/images/Srishti-IN.jpg';
import { useDarkMode } from '../context/DarkModeContext';

const About = () => {
    const { darkMode } = useDarkMode();
    
    return (
        <div className={`container text-${darkMode ? 'white' : 'gray-700'} pb-32 mx-auto`}>
            <h1 className={`text-${darkMode ? 'white' : 'gray-700'} text-5xl text-center pt-20 pb-12 mb-4`}>
                About Me
            </h1>

            <div className='flex flex-row justify-around items-center ms-14'>
                <div className='w-[24%]'>
                    <img className='rounded-2xl' src={image} alt='profile picture' />
                </div>

                <div className={`w-[55%] text-justify text-lg opacity-${darkMode ? '80' : '90'} me-12`}>
                    <p>Hello World! I'm a tech enthusiast driven by a passion for leveraging data-driven insights to propel digital transformation. With an insatiable curiosity, I thrive on expanding my knowledge in the ever-evolving tech landscape. My mission? To be a catalyst in the digital revolution, empowering organizations to thrive through my blend of passion, humility, and dedication.
                        Software development ignite my excitement. My priority is crafting top-notch solutions that not only meet but exceed client expectations. I seek opportunities with teams and projects that prioritize innovation and data-driven decision-making. Constant learning fuels my ambition to remain at the forefront of technological advancements.
                        My vision? A future where technology enhances lives, celebrates individuality, and fosters global betterment. If you believe my skills align with your organization's goals, I'm eager to connect. Or if you know of any opportunities that resonate with my aspirations, I welcome your recommendations.
                        Let's embark on this journey together towards technological excellence. Thank you for taking the time to read my profile!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;