import styled from 'styled-components'
import {NavLink} from "react-router-dom";
import classnames from "classnames";

import CLOSE_MENU_ICON from 'icons/close-menu.svg'
import {useDispatch} from "react-redux";
import {logOut} from "store/slices/userSlice.js";

const StyledMenu = styled.div`
  background: #161616;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 100px 0;
  transform: translateY(-100%);
  transition: transform 0.4s ease;
  will-change: transform;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .menu-link {
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 120% */
    transition: color 0.2s ease;
    
    &.active {
      color: #3498db;
    }
    
    &:hover {
      color: #5ac8fa;
    }
    
    &:not(:last-child) {
      margin-bottom: 14px;
    }
  }
  
  .menu-close {
    position: absolute;
    top: 35px;
    right: 35px;
    cursor: pointer;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 0.7;
    }
    
    img {
      width: 18px;
    }
  }
  
  &.active {
    transform: translateY(0);
  }
`

const Menu = ({ active, onClose }) => {

    const dispatch = useDispatch()

    return (
        <StyledMenu className={classnames('menu', { active })}>
            <NavLink className="menu-link" to="/admin/all">УСІ ЗАПИСИ</NavLink>
            <NavLink className="menu-link" to="/admin/masters">МАЙСТРИ</NavLink>
            <NavLink className="menu-link" to="/admin/services">ПОСЛУГИ</NavLink>
            <NavLink className="menu-link" to="/admin/additional">ДОДАТКОВО</NavLink>
            <button onClick={() => dispatch(logOut())} className="menu-link">
               ВИЙТИ
            </button>
            <button onClick={onClose} className="menu-close">
                <img src={CLOSE_MENU_ICON} alt="close"/>
            </button>
        </StyledMenu>
    );
};

export default Menu;