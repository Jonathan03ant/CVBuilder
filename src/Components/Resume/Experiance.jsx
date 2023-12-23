import StartToEnd from "./Start-End";
import React from 'react';




export default function Experiance ({
    details = [],
}) {
    if (details.length > 0) {
        return (
            <div className="section-experiance">
                <h2 
                    className="header-experiance"
                    style={{
                        borderBottom: `1px solid #ddd`,
                    }}
                >
                    EXPERIANCE
                </h2>
                <div className="body-experiance">
                    {details.map((job) => 
                    <Job 
                        key={job.id} 
                        details={job}
                    />
                    )}
                </div>
            </div>
        );
    }
}

function Job({details}){
    return(
        <div className="experiance-details">
            <div className="job-and-location">
                <h3 className="experiance-position">
                    {details.title}
                </h3>
                <h4 className="experiance-company">
                    {details.company}
                    {" "}
                    |
                    {" "}
                    <span className="experiance-location" style={{ fontWeight: 'normal' }}> {details.location}</span>
                </h4>

                <ul className="experiance-sars">
                    {details.sars.map((sar) => (
                        <li className="experiance-sar" key={sar.id}>
                            <div className="bullet-point" />
                            {sar.sarText}
                        </li>
                    ))}
                </ul>
            </div>
            <StartToEnd start={details.start} end={details.end} />
        </div>
    );
}