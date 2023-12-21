import StartToEnd from "./Start-End";

export default function Education({
    details
}) {
    if (details.length > 0) {
        return (
            <div className="section-education">
                <h2
                    className="header-education"
                    style={{ 
                        borderBottom: `1px solid #ddd`,
                    }}
                >
                    EDUCATION
                </h2>
                <div className="body-education">
                    {details.map((school) => 
                    <School 
                        key={school.id} 
                        details={school} 
                    />
                    )}
                </div>
            </div>
        );
    }    
}

function School ({details}) {
    return (
        <div className="education-details">
            <div className="school-and-location">
            <h3 className="education-school">
                    {details.school}
                    {" "}
                    |
                    {" "}
                    <span className="educational-location" style={{ fontWeight: 'normal' }}> {details.location}</span>
            </h3>
                <h4 className="education-degree"> {details.degree} </h4>
            </div>
            <StartToEnd start={details.start} end={details.end} />
        </div>
    );
}
    