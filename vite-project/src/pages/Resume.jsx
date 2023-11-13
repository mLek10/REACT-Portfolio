import React from 'react';

function Resume() {
    const items = [
        'CSS', 
        'HTML', 
        'Express.js', 
        'Node.js', 
        'JavaScript', 
        'OOP', 
        'ORM', 
        'API Development', 
        'MySQL', 
        'React.js',
        'Tailwind CSS',
        'Bootstrap',
        'MongoDB',
        'Mongoose',
        'GraphQL',
        'Apollo Server',
        'REST APIs',
        'MERN Stack',    
    ];

    return (
        <div className="container mx-auto mt-8 p-8 bg-gray-200 rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">My Current Skills</h1>
        <div className="grid grid-cols-2 gap-4">
            <ul className="list-inside list-disc">
                {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ul className="list-inside list-disc">
                {items.slice(Math.ceil(items.length / 2)).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
);
}


export default Resume;
