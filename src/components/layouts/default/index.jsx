import classNames from 'classnames'
import Header from 'components/modules/header'
import Head from 'components/modules/head/Head'

import './index.scss'

const DefaultLayout = ({ title, children, className, action, onClose, onBack, onAdd }) => {
    return (
        <div className="window">
            <Head title={title} />
            <div className={classNames('default-layout', className)}>
                <Header action={action} onBack={onBack} onClose={onClose} onAdd={onAdd} />
                <div className="container">{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout