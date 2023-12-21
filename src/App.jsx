import React from 'react'
import { useState } from 'react'
import Information from './Components/informationEditor'

import './App.css'
import {v4 as uuidv4 } from 'uuid'

{/* Editor Import */}
import PersonalInfo from './Components/personalInfoEditor'
import EducationInfo from './Components/educationEditor'
import ExperianceInfo from './Components/experianceEditor'

{/* Resume Import */}
import Personal from './Components/Resume/Personal'
import Education from './Components/Resume/Educational'
import Experiance from './Components/Resume/Experiance'
import { set } from 'mongoose'


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
        *Experiance Information
    */

    const [experianceInfo, setExperianceInfo] = useState([
        /*
            *Default values
        */
        {
            id: uuidv4(),
            title: "Undergraduate Researcher",
            company: "Carleton University",
            location: "Ottawa, ON",
            start: "2020-09",
            end: "2025-04",
            sars: [
                {
                    id: uuidv4(),
                    sarText: "Conducted research in the field of AI and Machine Learning."
                },
                {
                    id: uuidv4(),
                    sarText: "Worked on a project to create a self-driving car."
                },
                {
                    id: uuidv4(),
                    sarText: "Published a paper on the topic of AI and Machine Learning."
                }
            ]
        },

        {
            id: uuidv4(),
            title: "Software Developer",
            company: "Google",
            location: "Toronto, ON",
            start: "2020-09",
            end: "2025-04",
            sars: [
                {
                    id: uuidv4(),
                    sarText: "Worked on a project to create a self-driving car."
                },
                {
                    id: uuidv4(),
                    sarText: "Published a paper on the topic of AI and Machine Learning."
                }
            ]   
        }
    ]);

    const handleEditExperianceInfo = (id, field, index, value) => {
        setExperianceInfo(prevExperianceInfo =>
            prevExperianceInfo.map((info) =>
                info.id === id 
                    ? field === 'sars'
                        ? {...info, [field]: info[field].map((sar, sarIndex) => sarIndex === index ? {...sar, sarText: value} : sar)}
                        : {...info, [field]: value}
                    : info
            )
        );
    };

    const handleAddJob = () => {
        setExperianceInfo(prevExperianceInfo => [
            ...prevExperianceInfo,
            {
                id: uuidv4(),
                title: "",
                company: "",
                location: "",
                start: "",
                end: "",
                sars: []
            }
        ]);
    };

    const handleDeleteJob = (id) => {
        setExperianceInfo(prevExperianceInfo =>
            prevExperianceInfo.filter(job => job.id !== id)
        );  
    };

    const handleAddExperianceSar = (jobId) => {
        setExperianceInfo(prevExperianceInfo =>
            prevExperianceInfo.map((job) => 
                job.id === jobId
                ? {...job, sars: [...job.sars, {id: uuidv4(), sarText: ""}]}
                : job
            )
        );
    };

    const handleDeleteExperianceSar = (jobId, sarId) => {
        setExperianceInfo(prevExperianceInfo =>
            prevExperianceInfo.map((job) =>
                job.id === jobId
                ? {...job, sars: job.sars.filter((sar) => sar.id !== sarId)}
                : job
            )
        );
    }







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

            <ExperianceInfo
                experiance={experianceInfo}
                editExperianceInfo={handleEditExperianceInfo}
                addExperianceInfo={handleAddJob}
                deleteExperianceInfo={handleDeleteJob}
                addExperianceSar={handleAddExperianceSar}
                deleteExperianceSar={handleDeleteExperianceSar}
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

            <Experiance
                details={experianceInfo}
            />

        </div>

    </div>
  )
}

export default App
