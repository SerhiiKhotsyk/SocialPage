import React, { useEffect, useState } from "react";

const StatusWithHook = (props) => {
    debugger
    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    }

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    return (
        <>
            {!editMode
                ? <div>
                    <span onDoubleClick={activateEditMode} >{status || 'No status yet'}</span>
                </div>
                : <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                </div>}
        </>
    )

}

export default StatusWithHook;