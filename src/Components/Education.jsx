import { useState } from "react";

export default function Education({
    onEditEducationInfo,
    onAddEducationInfo,
    educationInfo,
}){
    const [hidden, setHidden] = useState(true);
    return(
        <div className="editor">
            <h2 className="infoHeader"> Education Information</h2>

            {/* Drop Down */}
            <select 
                value= {!hidden ? 'Edit' : "Close"}
                onChange= {() => setHidden(!hidden)}
                title= {!hidden ? 'Edit Educational Details' : 'Done Editing Educational Details'}
            >
                <option value="Edit"> Edit </option>
                <option value="Close"> CLOSE</option>
            </select>

            {!hidden && educationInfo.map((school) =>(
                <div className="informationEditor" key={school.id}>
                    <label>
                        <span> School Name</span>
                        <input  
                            type="Text"
                            value={school.school}
                            onChange={(e) => onEditEducationInfo(school.id, 'school', e.target.value)}
                        />
                    </label>

                    <label>
                        <span> Degree </span>
                        <input 
                            type="text"
                            value={school.degree}
                            onChange={(e) => onEditEducationInfo(school.id, 'degree', e.target.value)}
                        />
                    </label>

                    <label>
                        <span> Location </span>
                        <input
                            type="text"
                            value={school.location}
                            onChange={(e) => onEditEducationInfo (school.id, 'location', e.target.value)}
                        />
                    </label>

                    <label className="half-width">
                        <span> Start </span>
                        <input
                            type="month"
                            value={school.month}
                            onChange={(e) => onEditEducationInfo (school.id, 'month', e.target.value)}
                        />
                    </label>

                    <label className="half-width">
                        <span> End </span>
                        <input
                            type="month"
                            value={school.end}
                            onChange={(e) => onEditEducationInfo (school.id, 'end', e.target.value)}
                        />
                    </label>

                {/* We need a button to Delete this School (with school ID) */}
                    <button
                        type="button"
                        className="infoDeletingButton editButton"
                        onClick={() => onEditEducationInfo(school.id)}
                    >
                    Remove School
                    </button>
                </div>
            ))};
            {/* We need a button to add more schools */}
            {!hidden &&(
                <button
                type="button"
                className="infomationAddingButton editButton"
                onClick={onAddEducationInfo}
                >
                Add School
                </button>
            )}
        </div>
    );
}