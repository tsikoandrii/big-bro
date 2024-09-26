import classNames from 'classnames'
import Head from 'components/modules/head/Head'

import LoginImage from "images/bg.jpg";

import './index.scss'

const LoginLayout = ({ title, children, className}) => {
    return (
        <div className="window">
            <Head title={title} />
            <div style={{ backgroundImage: `url(${LoginImage})`} } className={classNames('login', className)}>
                {children}
            </div>
        </div>
    )
}

export default LoginLayout