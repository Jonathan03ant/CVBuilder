import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Typewriting() {
    const word = [
        "Build your Resume with ease",
        "Add and edit your information",
        "Download your Resume as a PDF",
        "Share your Resume with others"
    ]

    return (
        <div className='type-writter'>
            <h2> 
                <Typewriter 
                    words={word}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h2>
            
        </div>
    );
}


