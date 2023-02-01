import React from "react";
import { connect } from "react-redux";
import { getStatus, getUserProfileThunk, updateStatus } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.userAuthId ;
        }
        this.props.getUserProfileThunk(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
             updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.posts.profile,
        status: state.posts.status,
        userAuthId: state.auth.id,
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfileThunk, getStatus, updateStatus }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);