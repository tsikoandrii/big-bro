import React, {useState} from 'react'
import './index.scss'
import CLOSE_ICON from 'icons/close.svg'
import BACK_ICON from 'icons/back.svg'
import ADD_ICON from 'icons/add.svg'
import MENU_ICON from 'icons/menu.svg'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "components/modules/header/Menu.jsx";
import classnames from "classnames";

const Header = ({ action, onClose, onBack, onAdd }) => {
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.user.isAuth)
    const [open, setOpen] = useState(false);
    return (
        <div className="header">
            {
                onBack && <button className="header__back" onClick={() => navigate(-1)}>
                    <img src={BACK_ICON} alt="close"/>
                </button>
            }
            {
                onAdd && <button className="header__back" onClick={onAdd}>
                    <img src={ADD_ICON} alt="add"/>
                </button>
            }
            <div className="header__action">{action}</div>
            {
                onClose && <button className={classnames({
                    'header__close': !isAuth,
                    'header__back': isAuth,
                })} onClick={onClose}>
                    <img src={CLOSE_ICON} alt="close"/>
                </button>
            }
            {
                isAuth && <button className="header__menu" onClick={() => setOpen(true)}>
                    <img src={MENU_ICON} alt="close"/>
                </button>
            }
            {
                isAuth ? <Menu active={open} onClose={() => setOpen(false)} /> : null
            }
        </div>
    );
};

export default Header;