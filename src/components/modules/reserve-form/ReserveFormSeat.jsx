import React from 'react';
import classnames from "classnames";

const ReserveFormSeat = ({ onClick, active, hour }) => {
    return (
        <div
            onClick={onClick}
            key={hour}
            className={classnames("seat", { active })}
        >
            {hour}
        </div>
    );
};

export default ReserveFormSeat;