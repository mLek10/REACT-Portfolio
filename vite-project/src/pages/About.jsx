import React from 'react';
import myImage from '../assets/me.jpg';

function About() {
    return (

        <div className="container mx-auto mt-8 p-8 bg-blue-300 rounded-lg">
            <div className="flex flex-col items-center">
                <img src={myImage} alt="Emily" className="rounded-full h-40 w-40 mx-auto my-4" />
                <div className="text-center">
                    <strong className="block text-xl font-bold">Emily Caton</strong>
                    <span className="block text-gray-600">Full-Stack Web Dev Student</span>
                </div>
            </div>

            <h1 className="text-3xl font-bold mt-8 mb-4"> Welcome to my About Me Page!</h1>

            <p className="text-lg text-gray-700"> My name is Emily Caton. I live in St. Louis and am a 33yr old
                stay-at-home mom of two wonderful kiddos, ages 8 and 5. I am currently in a computer coding bootcamp for full-stack web development. Outside of being a mom and attending school, I find lots of peace and comfort out in nature or working on art projects. Finding time to be expressive and creative, in any way, has always been very important to me and my wellness. I
                believe my urge to be creative and solve problems is a great strength to have in the web-development community. I cannot wait to put my skills to use and
                challenge myself in a fulfilling web-development career. Thanks for looking!</p>

        </div>

    );
}

export default About;