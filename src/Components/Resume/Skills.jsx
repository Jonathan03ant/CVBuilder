
import React from 'react';



export default function Skills ({
    details
}) {
    if (details.length > 0) {
        return (
            <div  className="section-skills">
                <h2
                    className="header-skills"
                    style={{
                        borderBottom: `1px solid #ddd`,
                    }}
                >
                    Technical Skills
                </h2>
                <div className="body-skills">
                    {details.map((skill) =>
                        <Skill key={skill.id}
                        details={skill}
                        />
                        )}
                </div>
            </div>
        );
    }
}

function Skill ({details}){
    return (
        <div className="skills-details">
            <b className="skill-title">
                {details.title}
                :
            </b>
            <p className="skill-stack" style={{ fontWeight: 'normal' }}>
                {details.skills.join(', ')}
            </p>
        </div>
    )
}