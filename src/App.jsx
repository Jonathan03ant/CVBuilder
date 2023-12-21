import React from 'react'
import { useState } from 'react'
import Information from './Components/informationEditor'
import PersonalInfo from './Components/personalInfoEditor'
import Personal from './Components/Resume/Personal'
import EducationInfo from './Components/educationEditor'
import Education from './Components/Resume/Educational'
import './App.css'
import {v4 as uuidv4 } from 'uuid'

function App() {
    const sectionID = uuidv4();
    /*
        *Personal Information
    */
    const [personalInfo, setPersonalInfo] = useState({
        /*
            *Default values
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

    /*
        *Education Information
    */

    const [educationInfo, setEducationInfo] = useState([
        /*
            *Default values
        */
        {
            id: uuidv4(),
            school: "Carleton University",
            degree: "Bachelor of Computer Science, AI and Machine Learning Stream",
            location: "Ottawa, ON",
            start: "2020-09",
            end: "2025-04"
        }, 
        {
            id: uuidv4(),
            school: "St. Michael's College School",
            degree: "High School Diploma",
            location: "Toronto, ON",
            start: "2021-06",
            end: "2020-09"
        }
    ])

    const handleEditEducationalInfo = (id, field, value) => {
        setEducationInfo(prevEducationInfo =>
            prevEducationInfo.map((info =>
                info.id === id ? {...info, [field]: value} : info
            )
        ));
    };

    const handleAddSchool = () => {
        setEducationInfo(prevEducationInfo => [
            ...prevEducationInfo,
            {
                id: uuidv4(),
                school: "",
                degree: "",
                location: "",
                start: "",
                end: ""
            }
        ]);
    };

    const handleDeleteSchool = (id) => {
        setEducationInfo(prevEducationInfo =>
            prevEducationInfo.filter(school => school.id !== id)
        );
    };


    /*
        *Rendering
    */
  return (
    <div className="app-container">
        {/*
            *Left side (Editor Part)
        */}

        <div className='editor-display'>

            <PersonalInfo
                personalInfo={personalInfo}
                editPersonalInfo={handleEditPersonalInfo}
            />

            <EducationInfo
                educationInfo={educationInfo}
                editEducationInfo={handleEditEducationalInfo}
                addEducationInfo={handleAddSchool}
                deleteEducationInfo={handleDeleteSchool}
            />

        </div>

        {/*
            *Right side (Resume Part)
        */}

        <div className="resume-display">
            <Personal 
                personalDetails={personalInfo}
            />

            <Education
                details={educationInfo}
            />

        </div>

    </div>
  )
}

export default App
