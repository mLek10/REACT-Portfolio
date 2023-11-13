import React from 'react';


function Portfolio() {
    const imageLinks = [
        { src: '/assets/wiz-1.png', link1: 'https://github.com/mLek10/WellnessWizard', link2: 'https://wellness-wizard-c98198b06502.herokuapp.com/' },
        { src: '/assets/JQ1.png', link1: 'https://github.com/mLek10/JavaScript-Quiz', link2: 'https://mlek10.github.io/JavaScript-Quiz/' },
        { src: '/assets/NoteApp.png', link1: 'https://github.com/mLek10/Note-Taker', link2: 'https://mighty-mountain-61858-b50cb420290b.herokuapp.com/' },
        { src: '/assets/WD1.png', link1: 'https://github.com/mLek10/Work-Day-Calendar', link2: 'https://mlek10.github.io/Work-Day-Calendar/' },
        { src: '/assets/UnleashtheFacts.html.png', link1: 'https://github.com/hansonsteven26/Melody-Muse', link2: 'https://hansonsteven26.github.io/Melody-Muse/' },
        { src: '/assets/weather1.png', link1: 'https://github.com/mLek10/Weather-Predictor', link2: 'https://mlek10.github.io/Weather-Predictor/' },
    ];

    return (
        <div className="container mx-auto mt-8 p-8 bg-violet-400 rounded-lg">
            <h1 className="text-3xl font-bold mb-8">Portfolio</h1>

            <div className="grid grid-cols-3 gap-4">
                {imageLinks.map((item, index) => (
                    <div key={index} className="relative group">
                        <img src={item.src} alt={`Project ${index + 1}`} className="w-full h-48 object-cover rounded-md transition duration-300 transform group-hover:blur" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <a href={item.link1} target="_blank" rel="noopener noreferrer" className="text-white bg-pink-300 hover:bg-violet-400 py-2 px-4 mx-2 rounded-md">GitHub</a>
                            <a href={item.link2} target="_blank" rel="noopener noreferrer" className="text-white bg-teal-500 hover:bg-blue-300 py-2 px-4 mx-2 rounded-md">Live Site</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;