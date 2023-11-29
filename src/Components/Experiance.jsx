import React from "react";

export default function Experiance({
    Experiance,
    onEditExperiance,
    onAddExperiance,
    onDeleteExperiance,
}){
    const[hidden, setHidden] = useState(true);
    return(
        <div className="editor">
            <h2 className="infoHeader"> Experiance</h2>
            <select 
                value = {!hidden ? "Edit": "Close"}
                onChange = {() => setHidden(!hidden)}
                title= {!hidden ? 'Edit Experiance Details' : 'Done Editing Experiance Details'}
            >
                <option value="Edit"> EDIT </option>
                <option value="Close"> CLOSE</option>
            </select>

            {!hidden &&(
                <div className="experianceEditor">
                </div>
            )};
        </div>
    );

}