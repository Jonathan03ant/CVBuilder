import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';

export default function Personal(
    {personalDetails}
){
    {/* Conditional Rendering Incoming*/}
    return(
        <div className="personalDetails">
            {personalDetails.name && <h1 className="personal-header"> {personalDetails.name}</h1>}
            <ul className="personal-body">

                {personalDetails.phone && (
                    <li className="personal-info">
                        <i className="fa-solid fa-phone" />
                        <span style={{ marginLeft: '4px' }}>{personalDetails.phone}</span>
                    </li>
                )}

                {personalDetails.email && (
                    <li className="personal-info">
                        <i className="fa-solid fa-envelope" />
                        <span style={{ marginLeft: '4px' }}>{personalDetails.email}</span>
                    </li>
                )}

                {personalDetails.linkdn && (
                    <li className="personal-info">
                        <i className="fa-brands fa-linkedin" />
                        <span style={{ marginLeft: '4px' }}>{personalDetails.linkdn}</span>
                    </li>
                )}

                {personalDetails.github && (
                    <li className="personal-info">
                        <i className="fa-brands fa-github" />
                        <span style={{ marginLeft: '4px' }}>{personalDetails.github}</span>
                    </li>
                )}
            </ul>
        </div>
    );
}