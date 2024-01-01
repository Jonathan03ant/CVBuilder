import StartToEnd from "./Start-End";
export default function Projects({
    details,
}) {
    if (details.length > 0) {
        return(
            <div className="section-projects">
                <h2
                    className="header-projects"
                    style={{
                        borderBottom: `1px solid #ddd`,
                    }}
                >
                    Projects
                </h2>
                <div className="body-projects">
                    {details.map((project) =>
                        <Project key={project.id}
                        details={project}
                        />
                        )}
                </div>
            </div>
        );
    }
}

function Project ({details}){
    return(
        <div className="projects-details">
            <div className="project-and-techStack">
                <h3 className="projects-title">
                    {details.title}
                    {" "}
                    |
                    {" "}
                    <span className="project-techStack" style={{ fontWeight: 'normal' }}> {details.techStack}</span>
                </h3>

                <ul
                    className="projects-sars">
                    {details.sars.map((sar) => (
                        <li className="projects-sar" key={sar.id}>
                            <div className="bullet-point" />
                            {sar.sarText}
                        </li>
                    ))}
                </ul>
            </div>
            <StartToEnd start={details.start} showEnd={false} />
        </div>
    )
}