import React from "react";

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status); 
    }
    onStatusChange = (event) => {    
        this.setState({
            status: event.currentTarget.value,
        }) 
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={ this.activateEditMode } >{this.props.status || 'No status yet'}</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status} />
                    </div>}
            </>
        )
    }
}

export default Status;