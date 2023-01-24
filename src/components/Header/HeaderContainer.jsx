import React from "react";
import { connect } from "react-redux";
import { setAuthUserDataThunk } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    
    componentDidMount() {
        
        this.props.setAuthUserDataThunk();
        // authAPI.me().then( response => {
        //     if (response.data.resultCode === 0) {
        //         let {id, login, email} = response.data.data;
        //         this.props.setAuthUserData(id, email, login);
        //     }})  
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photo,
    }
}

export default connect(mapStateToProps, {setAuthUserDataThunk})(HeaderContainer);