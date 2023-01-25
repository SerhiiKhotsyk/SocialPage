import React from "react";

class Status extends React.Component {

    state = {
        editMode: false,
        status: '',
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={ this.activateEditMode } >{this.props.status}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={ this.deactivateEditMode } value={this.props.status} />
                    </div>}
            </>
        )
    }
}

export default Status;