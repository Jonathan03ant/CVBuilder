import React from 'react'
import { useState } from 'react'
import PersonalInfo from './Components/PersonalInfo'
import Information from './Components/Information'
import './App.css'
import {v4 as uuidv4 } from 'uuid'

function App() {
    const sectionID = uuidv4();
    const [personalInfo, setPersonalInfo] = useState({
        /*
            *Default values
        */
        name: "Jonathan Antenanie",
        phoneNo: "647-803-5078",
        email: "jonathan03ant@gmail.com",
        place: "Toronto, Ontario, Canada",
        linkdn: "....../",
        github: "...github.com"
    });

const handleEditPersonalInfo = (field, value) => {
    setPersonalInfo({
        ...personalInfo,
        [field]: value,
    });
};

  return (
    <div>
        <PersonalInfo
            personalInfo={personalInfo}
            onEditPersonalInfo={handleEditPersonalInfo}
        />

        <Information
            sectionID={sectionID}
            informations={[]}
            onEditInformation={() => {}}
            onAddInformation={() => {}}
        />
    </div>
  )
}

export default App
