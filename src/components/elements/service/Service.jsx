import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

import ARROW_ICON from 'icons/arrow.svg'

const StyledService = styled(NavLink)`
  border-radius: 6px;
  border: 1px solid #AEAEAE;
  background: #FBFBFB;
  display: flex;
  align-items: center;
  padding: 9px;
  justify-content: space-between; 
  
  .service {
    
    &-info {
      padding-left: 5px;
    }

    &-title {
      color: #000;
      display: block;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      margin-bottom: 5px;
    }
    
    &-price {
      color: #FFCB46;
      font-size: 16px;
      font-weight: 600;
      line-height: 16px;
    }
    
    &-select {
      width: 46px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      border: 1px solid #FFCB46;
      background: #FFCB46;
      
      img {
        width: 11px;
      }
    }
  }
`

const Service = ({ title, price, to }) => {
    return (
        <StyledService to={to} className="service">
            <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <span className="service-price">{price}₴</span>
            </div>
            <div className="service-select">
                <img src={ARROW_ICON} alt="to"/>
            </div>
        </StyledService>
    );
};

export default Service;