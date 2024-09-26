import styled from 'styled-components'
import AppointmentCard from "components/elements/appointment-info/AppointmentCard.jsx";

import DeleteIcon from 'icons/delete.svg'

const StyledCheckoutCard = styled.div`
  background: #f8f8f8;
  border-radius: 6px;
  padding-top: 16px;
  position: relative;

  .checkout-card {

    &-name {
      color: #000;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 4px;
    }

    &-phone {
      display: block;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 4px;
      text-decoration: underline;
      color: #007aff;
    }

    &-delete {
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.7;
      }

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  .appointment-card {
    border: none !important;
    background: #fff;
  }
`


const CheckoutCard = ({ masterName, masterAvatar, date, serviceName, price, customerName, customerPhone, onDelete }) => {
    return (
        <StyledCheckoutCard className="checkout-card">
            <div className="checkout-card-name">{customerName}</div>
            <a href={`tel:${customerPhone}`} className="checkout-card-phone">{customerPhone}</a>
            <AppointmentCard
                masterName={masterName}
                masterAvatar={masterAvatar}
                date={date}
                serviceName={serviceName}
                price={price}
            />
            <button onClick={onDelete} className="checkout-card-delete">
                <img src={DeleteIcon} alt="delete"/>
            </button>
        </StyledCheckoutCard>
    );
};

export default CheckoutCard;