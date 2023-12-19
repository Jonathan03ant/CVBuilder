import React from 'react'
import { useState } from 'react'
import PersonalInfo from './Components/personalInfoEditor'
import Personal from './Components/Resume/Personal'
import Information from './Components/informationEditor'
import './App.css'
import {v4 as uuidv4 } from 'uuid'

function App() {
    const sectionID = uuidv4();
    const [personalInfo, setPersonalInfo] = useState({
        /*
            *Default values
            *
        */
        name: "John Doe",
        phone: "123-456-78910",
        email: "joedoe@edu.ca",
        linkdn: "linkedin.com/in/joedoe/",
        github: "github.com/Joedoe"
    });

const handleEditPersonalInfo = (field, value) => {
    setPersonalInfo({
        ...personalInfo,
        [field]: value,
    });
};

  return (
    <div className="app-container">
        <div className='editor-display'>
            <PersonalInfo
                personalInfo={personalInfo}
                editPersonalInfo={handleEditPersonalInfo}
            />
        </div>
        <div className="resume-display">
            <Personal 
                personalDetails={personalInfo}
            />

        </div>

    </div>
  )
}

export default App
