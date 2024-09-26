import styled from 'styled-components'
import { STRAPI_URL } from "constants/main.js";

const StyledAppointmentCard = styled.div`
  position: relative;
  border-radius: 6px;
  border: 1px solid #AEAEAE;
  background: #FBFBFB;
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 20px;

  .appointment-card {

    &-avatar {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      overflow: hidden;
      margin-right: 16px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-name {
      font-size: 24px;
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 8px;
      color: #000;
    }

    &-date {
      color: #42c006;
      font-size: 12px;
      font-weight: 400;
      line-height: 24px;
    }

    &-service {
      color: #000;
      font-size: 12px;
      font-weight: 400;
      line-height: 1.3;
    }

    &-price {
      position: absolute;
      color: #FFCB46;
      font-size: 18px;
      font-weight: 600;
      line-height: 16px;
      top: 12px;
      right: 12px;
    }
  }
`
const AppointmentCard = ({ masterName, masterAvatar, date, serviceName, price }) => {
    return (
        <StyledAppointmentCard className="appointment-card">
            <div className="appointment-card-avatar">
                <img src={STRAPI_URL + masterAvatar} alt={masterName}/>
            </div>
            <div className="appointment-card-info">
                <div className="appointment-card-name">{masterName}</div>
                <div className="appointment-card-date">{date}</div>
                <div className="appointment-card-service">{serviceName}</div>
            </div>
            <div className="appointment-card-price">{price}₴</div>
        </StyledAppointmentCard>
    );
};

export default AppointmentCard;