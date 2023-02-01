import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { authAPI } from "../../api/api";
import { loginThunk } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import style from './Login.module.css';
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
    return <form className={style.form} onSubmit={props.handleSubmit}>
        <div className={style.loginBox}>
            <p>Enter your login:</p>
            <Field type="text" placeholder="Login" validate={[required]} 
            component={Input} name="email"/>
        </div>
        <div className={style.passwordBox}>
            <p>Password:</p>
            <Field type="text" placeholder="Password" validate={[required]} 
            component={Input} name="password"/>
        </div>
        <div className={style.remember_meBox}>
            <Field type="checkbox" component='input' name="rememberMe"/> Remember me
        </div>
        { props.error &&
            <div className={style.formSummaryError}>
                {props.error}
            </div>
        }
        <div className={style.formButtonBox}>
            <button>Login</button>
        </div>
        
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe )
    }

    if (props.isAuth) {
        return <Navigate to='/profile' />
    }

    return <div className={style.formPage}>
        <div className={style.formPageInner}>
            <h1 className={style.formTitle}>LoginPage</h1>
            <LoginReduxForm onSubmit={ onSubmit }/>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, { loginThunk })(Login);