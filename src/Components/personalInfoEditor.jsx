import { useState} from 'react';

export default function PersonalInfo({
    personalInfo,
    editPersonalInfo,
}){
    const [hidden, setHidden] = useState(true);
    return(
        <div className="editor">
            <div className="header-container">
                <h2 className="infoHeader"> Personal Information </h2>
                {/* Drop Down */}
                <select
                    value= {!hidden ? 'Edit' : 'Close'}
                    onChange={() => setHidden(!hidden)}
                    title={!hidden ? 'Edit Personal Details' : "Done Editing Personal Details"}
                >
                    <option value="Edit">EDIT</option>
                    <option value="Close">CLOSE</option>
                </select>
            </div>
            <hr />
            {!hidden && (
                <div className="informationEditor">
                    <label>
                        <span> Name: </span>
                        <input 
                            type="text"
                            value={personalInfo.name}
                            onChange={(e) => editPersonalInfo('name', e.target.value)}
                        />
                    </label>

                    <label>
                        <span> Phone: </span>
                        <input 
                            type="text"
                            value={personalInfo.phone}
                            onChange={(e) => editPersonalInfo('phone', e.target.value)}
                        />
                    </label>

                    <label>
                        <span> Email: </span>
                        <input
                            type="text"
                            value={personalInfo.email}
                            onChange={(e) => editPersonalInfo('email', e.target.value)}
                        />
                    </label>

                    <label>
                        <span> LinkedIn: </span>
                        <input 
                            type="text"
                            value={personalInfo.linkdn}
                            onChange={(e) => editPersonalInfo('linkdn', e.target.value)}
                        />
                    </label>

                    <label>
                        <span> Github: </span>
                        <input 
                            type="text"
                            value={personalInfo.github}
                            onChange={(e) => editPersonalInfo('github', e.target.value)}
                        />
                    </label>
                </div>
            )}

        </div>
    ); 
}