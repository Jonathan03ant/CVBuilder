import { useState} from 'react';

export default function PersonalInfo({
    personalInfo,
    onEditPersonalInfo,
}){
    const [hidden, setHidden] = useState(true);
    return(
        <div className="editor">
            <h2 className="infoHeader"> Personal Information </h2>

            {/* Drop Down */}
            
            <select 
                value= {hidden ? 'Edit' : 'Close'}
                onChange={() => setHidden(!hidden)}
                title={hidden ? 'Edit Personal Details' : "Done Editing Personal Details"}
            >
                <option value="Edit">EDIT</option>
                <option value="Close">CLOSE</option>
            </select>

            {!hidden && (
                <div className="informationEditor">
                    <label>
                        <span> Name: </span>
                        <input 
                            type="text"
                            value={personalInfo.name}
                            onChange={(e) => onEditPersonalInfo('name', e.target.value)}
                        />
                    </label>

                    <label>
                        <span> Phone: </span>
                        <input 
                            type="text"
                            value={personalInfo.phoneNo}
                            onChange={(e) => onEditPersonalInfo('phoneNo', e.target.value)}
                        />
                    </label>

                    <label>
                        <span> Email: </span>
                        <input
                            type="text"
                            value={personalInfo.email}
                            onChange={(e) => onEditPersonalInfo('email', e.target.value)}
                        />
                    </label>

                    <label>
                        <span> Place: </span>
                        <input
                            type="text"
                            value={personalInfo.place}
                            onChange={(e) => onEditPersonalInfo('place', e.target.value)}
                        />
                    </label>

                    <label>
                        <span> LinkedIn: </span>
                        <input 
                            type="text"
                            value={personalInfo.linkdn}
                            onChange={(e) => onEditPersonalInfo('linkdn', e.target.value)}
                        />
                    </label>

                    <label>
                        <span> Github: </span>
                        <input 
                            type="text"
                            value={personalInfo.github}
                            onChange={(e) => onEditPersonalInfo('github', e.target.value)}
                        />
                    </label>
                </div>
            )}

        </div>
    ); 
}