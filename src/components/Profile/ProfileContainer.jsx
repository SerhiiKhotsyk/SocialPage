import React from "react";
import { connect } from "react-redux";
import { getUserProfileThunk } from "../../redux/profile-reducer";
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
            userId = 2;
        }
        this.props.getUserProfileThunk(userId);
        // userAPI.getProfile(userId).then( response => {
        //     this.props.getUserProfile(response.data)
        // })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.posts.profile,
    }
}

// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {getUserProfileThunk})(WithUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps, { getUserProfileThunk }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);