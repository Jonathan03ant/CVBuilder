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

            {!hidden && (
                <dib className="EducationEditor">
                    <label>

                    </label>

                    <label>

                    </label>
                </dib>

            )};
        </div>
    );
}