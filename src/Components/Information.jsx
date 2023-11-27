export default function Information({
    sectionId, 
    informations = [],
    onEditInformation,
    onAddInformation,
}) {
    return(
        <ul className="informations">
            {/*
                *Each information has a section ID, infoID, and button (inside and outside)
            */}

            {informations.map((info) => (
                <li className="info" key={info.id}>
                    <input
                        type="text"
                        value={info.text}
                        onChange={(e) => onEditInformation(sectionId, info.id, e.target.value)}
                    />

                    {/*
                        *Editor/Delete Button 
                    */}
                    <button
                        type="button"
                        className="infoDeletingButton editButton"
                        title="Delete this Info"
                        onClick={()=> onEditInformation(sectionId, info.id, undefined)}
                    >
                        Delete Info
                    </button>
                </li>  
            ))}

            
            <li>
            {/*
                *Editor/Add Button
                *This one is for Informations
            */}
                <button
                    type="button"
                    className="infomationAddingButton editButton"
                    title="Add Information"
                    onClick={() => onAddInformation(sectionId)}
                >
                    Add Information
                </button>
            </li>
        </ul>
    );
}