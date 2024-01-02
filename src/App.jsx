import React from 'react'
import { useState } from 'react'
import Information from './Components/informationEditor'
import Typewriting from './Components/Typewriting'
import EditorHeader from './Components/EditorHeader'

import './App.css'
import {v4 as uuidv4 } from 'uuid'

{/* Editor Import */}
import PersonalInfo from './Components/personalInfoEditor'
import EducationInfo from './Components/educationEditor'
import ExperianceInfo from './Components/experianceEditor'
import ProjectsInfo from './Components/projectsEditor'
import SkillsInfo from './Components/skillsEditor'

import DownloadButton from './Components/DownloadButton'

{/* Resume Import */}
import Personal from './Components/Resume/Personal'
import Education from './Components/Resume/Educational'
import Experiance from './Components/Resume/Experiance'
import Projects from './Components/Resume/Projects'
import Skills from './Components/Resume/Skills'



function App() {
    const sectionID = uuidv4();
    const [font, setFont] = useState('font1');
    /*
        *Personal Information
    */
    const [personalInfo, setPersonalInfo] = useState({
        /*
            *Default values
        */
        name: "John Doe",
        phone: "123-456-78910",
        email: "johndoe@edu.ca",
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
            start: "2017-06",
            end: "2020-06"
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
            start: "2019-09",
            end: "2020-12",
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
            title: "Software Developer Intern",
            company: "Google",
            location: "Toronto, ON",
            start: "2021-01",
            end: "2021-04",
            sars: [
                {
                    id: uuidv4(),
                    sarText: "Joined a team of 5 to work on a project to create a Googgle Chrome console extension."
                },
                {
                    id: uuidv4(),
                    sarText: "Collaborated with the UX team to redesign the extension's user interface, resulting in a 20% increase in user engagement."
                },
                {
                    id: uuidv4(),
                    sarText: "Optimized the extension's performance, reducing the load time by 30%."
                },
                {
                    id: uuidv4(),
                    sarText: "Conducted code reviews and provided constructive feedback to peers, improving code quality and team collaboration."
                },
                {
                    id: uuidv4(),
                    sarText: "Wrote comprehensive unit tests, improving code coverage by 25%."
                },
            ]   
        },
        {
            id: uuidv4(),
            title: "Machine Learning Engineer",
            company: "Google",
            location: "Mountain View, CA",
            start: "2022-07",
            end: "2023-06",
            sars: [
                {
                    id: uuidv4(),
                    sarText: "Developed and deployed machine learning models to improve search engine accuracy."
                },
                {
                    id: uuidv4(),
                    sarText: "Collaborated with cross-functional teams to integrate AI capabilities into Google products."
                },
                {
                    id: uuidv4(),
                    sarText: "Published a research paper on the advancements in neural networks."
                },
                {
                    id: uuidv4(),
                    sarText: "Presented at a tech conference about the impact of AI on technology."
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
        *Projects Information
    */

    const [projectsInfo, setProjectsInfo] = useState([
        {
            id: uuidv4(),
            title: "Quantum Computing Research",
            techStack: "Q#, Python",
            start: "2019-08",
            sars: [
                {
                    id: uuidv4(),
                    sarText: "Conducted research on the application of quantum computing in cryptography."
                },
                {
                    id: uuidv4(),
                    sarText: "Developed a quantum algorithm that improved computational efficiency."
                },
                {
                    id: uuidv4(),
                    sarText: "Published a paper on the advancements in quantum computing."
                },
                {
                    id: uuidv4(),
                    sarText: "Presented at a tech conference about the potential of quantum computing."
                }
            ]
        },
        {
            id: uuidv4(),
            title: "Blockchain Development",
            techStack: "Solidity, Ethereum",
            start: "2021-01",
            sars: [
                {
                    id: uuidv4(),
                    sarText: "Developed a decentralized application (DApp) on the Ethereum blockchain."
                },
                {
                    id: uuidv4(),
                    sarText: "Implemented smart contracts for secure and transparent transactions."
                },
                {
                    id: uuidv4(),
                    sarText: "Conducted a workshop on the basics of blockchain technology."
                }
            ]
        }
    ]);

    const handleEditProjectInfo = (id, field, value) => {
        setProjectsInfo(prevProjectsInfo =>
            prevProjectsInfo.map((info) =>
                info.id === id 
                    ? {...info, [field]: value}
                    : info
            )
        );
    }

    const handleAddProjectInfo = () => {
        setProjectsInfo(prevProjectsInfo => [
            ...prevProjectsInfo,
            {
                id: uuidv4(),
                title: "",
                techStack: "",
                start: "",
                end: "",
                sars: [],
            }
        ]);
    }

    const handleDeleteProjectInfo = (id) => {
        setProjectsInfo(prevProjectsInfo =>
            prevProjectsInfo.filter(project => project.id !== id)
        );
    }

    const handleAddProjectSar = (projectId) => {
        setProjectsInfo(prevProjectsInfo =>
            prevProjectsInfo.map((project) => 
                project.id === projectId
                ? {...project, sars: [...project.sars, {id: uuidv4(), sarText: ""}]}
                : project
            )
        );
    }

    const handleDeleteProjectSar = (projectId, sarId) => {
        setProjectsInfo(prevProjectsInfo =>
            prevProjectsInfo.map((project) =>
                project.id === projectId
                ? {...project, sars: project.sars.filter((sar) => sar.id !== sarId)}
                : project
            )
        );
    }

    /*
        *Skills Information
    */

    const [skillsInfo, setSkillsInfo] = useState([
        {
            id: uuidv4(),
            title: "Programming Languages",
            skills: ["Python", "Java", "C++", "C", "JavaScript", "TypeScript", "HTML", "CSS", "C#", "Q#"]
        },

        {
            id: uuidv4(),
            title: "Frameworks",
            skills: ["React", "Node.js", "Express", "TensorFlow", "PyTorch", "Keras", "Flask", "Django"]
        },

        {
            id: uuidv4(),
            title: "Databases",
            skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Neo4j"] 
        },

        {
            id: uuidv4(),
            title: "Cloud",
            skills: ["AWS", "Azure", "Google Cloud"]
        }
    ]);

    const handleEditSkillsInfo = (id, field, value) => {
        setSkillsInfo(prevSkillsInfo =>
            prevSkillsInfo.map((info) =>
                info.id === id 
                    ? field === 'skills'
                        ? {...info, [field]: value}
                        : {...info, [field]: value}
                    : info
            )
        );
    }

    const handleAddSkillsInfo = () => {
        setSkillsInfo(prevSkillsInfo => [
            ...prevSkillsInfo,
            {
                id: uuidv4(),
                title: "",
                skills: [],
            }
        ]);
    }

    const handleDeleteSkillsInfo = (id) => {
        setSkillsInfo(prevSkillsInfo =>
            prevSkillsInfo.filter(skill => skill.id !== id)
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
            <div className='editor-header'>
                <Typewriting  />
                <EditorHeader setFont={setFont} />
            </div>
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

            <ProjectsInfo
                projects={projectsInfo}
                editProjectInfo={handleEditProjectInfo}
                addProjectInfo={handleAddProjectInfo}
                deleteProjectInfo={handleDeleteProjectInfo}
                addProjectSar={handleAddProjectSar}
                deleteProjectSar={handleDeleteProjectSar}
            />

            <SkillsInfo
                skills={skillsInfo}
                editSkills={handleEditSkillsInfo}
                addSkills={handleAddSkillsInfo}
                deleteSkills={handleDeleteSkillsInfo}
            />
        

        </div>

        {/*
            *Right side (Resume Part)
        */}

        <div id="resume" className={`resume-display ${font}`}>
            <Personal 
                personalDetails={personalInfo}
            />

            <Education
                details={educationInfo}
            />

            <Experiance
                details={experianceInfo}
            />

            <Projects
                details={projectsInfo}
            />

            <Skills
                details={skillsInfo}
            />

        </div>

    </div>
  )
}

export default App
