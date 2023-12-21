import { useState } from "react";

export default function Education({
    educationInfo,
    editEducationInfo,
    addEducationInfo,
    deleteEducationInfo
}){
    const [hidden, setHidden] = useState(true);
    return(
        <div className="editor">
            <div className="header-container">
                <h2 className="infoHeader"> Education Information</h2>

                {/* Drop Down */}
                <select 
                    value= {!hidden ? 'Edit' : "Close"}
                    onChange= {() => setHidden(!hidden)}
                    title= {!hidden ? 'Edit Educational Details' : 'Done Editing Educational Details'}
                >
                    <option value="Edit"> EDIT </option>
                    <option value="Close"> CLOSE</option>
                </select>
            </div>
            <hr />
            {!hidden && educationInfo.map((school) =>(
                <div className="informationEditor" key={school.id}>
                    <label>
                        <span> School Name</span>
                        <input  
                            type="Text"
                            value={school.school}
                            onChange={(e) => editEducationInfo(school.id, 'school', e.target.value)}
                        />
                    </label>

                    <label>
                        <span> Degree </span>
                        <input 
                            type="text"
                            value={school.degree}
                            onChange={(e) => editEducationInfo(school.id, 'degree', e.target.value)}
                        />
                    </label>

                    <label>
                        <span> Location </span>
                        <input
                            type="text"
                            value={school.location}
                            onChange={(e) => editEducationInfo (school.id, 'location', e.target.value)}
                        />
                    </label>

                    <label className="half-width">
                        <span> Start Date </span>
                        <input
                            type="month"
                            value={school.start}
                            onChange={(e) => editEducationInfo (school.id, 'start', e.target.value)}
                        />
                    </label>

                    <label className="half-width">
                        <span> End Date </span>
                        <input
                            type="month"
                            value={school.end}
                            onChange={(e) => editEducationInfo (school.id, 'end', e.target.value)}
                        />
                    </label>

                {/* We need a button to Delete this School (with school ID) */}
                    <button
                        type="button"
                        className="infoDeletingButton editButton"
                        onClick={() => deleteEducationInfo(school.id)}
                    >
                    Remove School
                    </button>
                </div>
            ))}
            {/* We need a button to add more schools */}
            {!hidden &&(
                <button
                type="button"
                className="infomationAddingButton editButton"
                onClick={addEducationInfo}
                >
                Add School
                </button>
            )}
        </div>
    );
}