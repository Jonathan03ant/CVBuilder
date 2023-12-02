import { useState } from "react";

export default function Projects({
    projects, 
    editProjectInfo,
    addProjectInfo,
    deleteProjectInfo,
    addProjectSar,
    deleteProjectSar
}){
    const [hidden, setHidden] = useState(true);
    return(
        <div className="editor">
            <h2 className="infoheader"> Projects </h2>
            <select
                value={!hidden ? "Edit" : "Close"}
                onChange={() => setHidden(!hidden)}
                title={!hidden ? 'Edit Project Details' : 'Done Editing Project Details'}
            >
                <option value="Edit"> EDIT </option>
                <option value="Close"> CLOSE</option>
            </select>
            {!hidden && projects.map((project) => (
                <div className="informationEditor" key={project.id}>
                    <label>
                        <span>Title</span>
                        <input
                            type="text"
                            value={project.title}
                            onChange={(e) => editProjectInfo(project.id, 'title', e.target.value)}
                        />
                    </label>

                    <label>
                        <span>Tech Stack </span>
                        <input
                            type="text"
                            value={project.techStack}
                            onChange={(e) => editProjectInfo(project.id, 'techStack', e.target.value)}
                        />
                    </label>

                    <label className='hald-width'>
                        <span>Start Date</span>
                        <input
                            type="month"
                            value={project.start}
                            onChange={(e) => editProjectInfo(project.id, 'start', e.target.value)}
                        />
                    </label>

                    <label className="half-width">
                        <span>End Date</span>
                        <input
                            type="month"
                            value={project.end}
                            onChange={(e) => editProjectInfo(project.id, 'end', e.target.value)}
                        />
                    </label>

                    <SarEditor
                        sectionId={project.id}
                        sarInfo={project.sarInfo}
                        onAddSar={addProjectSar}
                        onDeleteSar={deleteProjectSar}
                    />
                    <button
                        type="button"
                        className="infoDeletingButton editButton"
                        onClick={() => deleteProjectInfo(project.id)}
                    >
                   Remove Project
                    </button>
                </div>
            ))};
            {!hidden &&(
                <button
                    type="button"
                    className="infomationAddingButton editButton"
                    onClick={addProjectInfo}
                >
                Add Project
                </button>
            )}
        </div>
    );
}