import React from "react";

export default function Experiance({
    experiance,
    editExperianceInfo,
    addExperianceInfo,
    deleteExperianceInfo,
    deleteExperianceSar,
    addExperianceSar
}){
    const[hidden, setHidden] = useState(true);
    return(
        <div className="editor">
            <h2 className="infoHeader"> Experiance </h2>
            <select 
                value = {!hidden ? "Edit": "Close"}
                onChange = {() => setHidden(!hidden)}
                title= {!hidden ? 'Edit Experiance Details' : 'Done Editing Experiance Details'}
            >
                <option value="Edit"> EDIT </option>
                <option value="Close"> CLOSE</option>
            </select>

            {!hidden && experiance.map((job) => (
                <div className="informationEditor" key={job.id}>
                    <label>
                        <span>Position Title</span>
                        <input
                            type="text"
                            value={job.title}
                            onChange={(e) => editExperianceInfo(job.id, 'title', e.target.value)}
                        />
                    </label>

                    <label>
                        <span>Company</span>
                        <input
                            type="text"
                            value={job.company}
                            onChange={(e) => editExperianceInfo(job.id, 'company', e.target.value)}
                        />
                    </label>

                    <label>
                        <span>Location</span>
                        <input
                            type="text"
                            value={job.location}
                            onChange={(e) => editExperianceInfo(job.id, 'location', e.target.value)}
                        />
                    </label>

                    <label className='hald-width'>
                        <span>Start Date</span>
                        <input
                            type="month"
                            value={job.start}
                            onChange={(e) => editExperianceInfo(job.id, 'start', e.target.value)}
                        />
                    </label>

                    <label className="half-width">
                        <span>End Date</span>
                        <input
                            type="month"
                            value={job.end}
                            onChange={(e) => editExperianceInfo(job.id, 'end', e.target.value)}
                        />
                    </label>

                    {/*SAR SECTIONS*/}

                    <SarEditor
                        sectionId={job.id}
                        sarInfo={job.sarInfo}
                        onAddSar={addExperianceSar}
                        onDeleteSar={deleteExperianceSar}
                    />

                    <button
                        type="button"
                        className="infoDeletingButton editButton"
                        onClick={() => deleteExperianceInfo(job.id)}
                    >
                   Remove Experiance
                    </button>
                </div>
            ))};
            {!hidden &&(
                <button
                    type="button"
                    className="infomationAddingButton editButton"
                    onClick={addExperianceInfo}
                >
                Add Experiance 
                </button>
            )}
        </div>
    );
}