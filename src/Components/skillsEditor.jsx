import { useState } from "react";

export default function Skills(
    skills,
    addSkills,
    editSkills,
    deleteSkills
){
    const [hidden, setHidden] = useState(true);

    return(
        <div className= "editor">
            <h2 className="infoheader"> Skills/Programming Languages </h2>
            <select
                value={!hidden ? "Edit" : "Close"}
                onChange={() => setHidden(!hidden)}
                title={!hidden ? 'Edit Project Details' : 'Done Editing Project Details'}
            >
                <option value="Edit"> EDIT </option>
                <option value="Close"> CLOSE</option>
            </select>
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
                        value={skill.stack}
                        onChange={(e) => editSkills(skill.id, 'stack', e.target.value)}
                    />
                </label>

                <button
                        type="button"
                        className="infoDeletingButton editButton"
                        onClick={() => deleteSkills(skill.id)}
                    >
                   Remove Skill
                    </button>
                </div>
            ))};
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
    );
}