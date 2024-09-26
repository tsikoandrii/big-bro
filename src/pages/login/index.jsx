import './index.scss'
import {HOME_PAGE_URL} from "constants/main";
import LOGO from 'images/logo.png'
import LoginLayout from "components/layouts/login/index.jsx";
import LoginForm from "components/modules/login-form/index.jsx";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const LoginPage = () => {
    const navigate = useNavigate();
    const auth = useSelector(state => state.user)

    useEffect(() => {
        if (auth.isAuth) navigate('/admin/all')
    }, [auth]);

    return (
        <LoginLayout className="login-page">
            <a href={HOME_PAGE_URL} className="login-page-logotype">
                <img src={LOGO} alt="logo"/>
            </a>
            <LoginForm />
        </LoginLayout>
    )
}

export default LoginPage