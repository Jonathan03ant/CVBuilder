import { useState} from 'react';

export default function PersonalInfo({
    personalInfo,
    onEditPersonalInfo,
}){
    const [hidden, setHidden] = useState(true);
    return(
        <div className="editor">
            <h2 className="infoHeader"> Personal Information </h2>
            /*
                *Drop Down 
            */
            <select 
                value= {hidden ? 'Edit' : 'Close'}
                onChange={() => setHidden(!hidden)}
                title={hidden ? 'Edit Personal Details' : "Done Editing Personal Details"}
            >
                <option value="Edit">EDIT</option>
                <option value="Close">CLOSE</option>
            </select>

            {!hidden && (
                <div className="informationEditor">
                    <lable>
                        <span> Name: </span>
                    </lable>

                    <lable>
                        <span> Phone: </span>
                    </lable>

                    <lable>
                        <span> Email: </span>
                    </lable>

                    <lable>
                        <span> Place: </span>
                    </lable>

                    <lable>
                        <span> Linkedin: </span>
                    </lable>

                    <lable>
                        <span> Github: </span>
                    </lable>
                </div>
            )}

        </div>
    );
    
}