import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

import ARROW_ICON from 'icons/arrow.svg'
import {STRAPI_URL} from "constants/main.js";

const StyledMaster = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  height: 90px;
  border-radius: 6px;
  border: 1px solid #AEAEAE;
  background: #FBFBFB;
  padding-left: 12px;
  
  &:hover .master-select {
    opacity: 0.8;
  }
    
  .master {
  
    &-avatar {
      border-radius: 100%;
      overflow: hidden;
      width: 70px;
      height: 70px;
      margin-right: 16px;
    
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  
    &-name {
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
    }
    
    &-select {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 36px;
      background: #FFCB46;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.2s;
      border-radius: 0 6px 6px 0;
      
      img {
        width: 12px;
      }
    }
  }
`

const Master = ({ avatar, name, to }) => {
    return (
        <StyledMaster to={to} className="master">
            <div className="master-avatar">
                <img src={STRAPI_URL + avatar} alt="avatar"/>
            </div>
            <div className="master-name">{name}</div>
            <div className="master-select">
                <img src={ARROW_ICON} alt="arrow"/>
            </div>
        </StyledMaster>
    );
};

export default Master;