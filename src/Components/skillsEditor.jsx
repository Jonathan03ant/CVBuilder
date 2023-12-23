import { useState } from "react";
import { VscTrash } from "react-icons/vsc";

export default function Skills({
    skills,
    addSkills,
    editSkills,
    deleteSkills

}){
    const [hidden, setHidden] = useState(true);

    return(
        <div className="editor">
            <div className='header-container'>
                <h2 className="infoHeader"> Skills </h2>
                <select 
                    value = {!hidden ? "Edit": "Close"}
                    onChange = {() => setHidden(!hidden)}
                    title= {!hidden ? 'Edit Experiance Details' : 'Done Editing Experiance Details'}
                >
                    <option value="Edit"> EDIT </option>
                    <option value="Close"> CLOSE</option>
                </select>
            </div>
        <hr /> 
            {!hidden && skills.map((skill) =>(
                <div className="informationEditor" key={skill.id}>
                <label>
                    <span>Title/Language/Framework</span>
                    <input
                        type="text"
                        value={skill.title}
                        onChange={(e) => editSkills(skill.id, 'title', e.target.value)}
                    />
                </label>

                <label>
                    <span>Skills</span>
                    <input
                        type="text"
                        value={skill.skills.join(', ')}
                        onChange={(e) => editSkills(skill.id, 'skills', e.target.value.split(', '))}
                    />
                </label>

                <button
                        type="button"
                        className="infoDeletingButton editButton"
                        onClick={() => deleteSkills(skill.id)}
                    >
                        Remove
                    </button>
                </div>
            ))}
            {!hidden &&(
                <button
                    type="button"
                    className="infomationAddingButton editButton"
                    onClick={addSkills}
                >
                Add Skill
                </button>
            )}
        </div>
    )
}