import '@fortawesome/fontawesome-free/js/all.js';

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
                        {personalDetails.phone}
                    </li>
                )}

                {personalDetails.email && (
                    <li className="personal-info">
                        <i className="fa-solid fa-envelope" />
                        {personalDetails.email}
                    </li>
                )}

                {personalDetails.place && (
                    <li className="personal-info">
                        <i className="fa-solid fa-map-marker-alt" />
                        {personalDetails.place}
                    </li>
                )}

                {personalDetails.linkdn && (
                    <li className="personal-info">
                        <i className="fa-brands fa-linkedin" />
                        {personalDetails.linkdn}
                    </li>
                )};

                {personalDetails.github && (
                    <li className="personal-info">
                        <i className="fa-brands fa-github" />
                        {personalDetails.github}
                    </li>
                )}
            </ul>
        </div>
    );
}