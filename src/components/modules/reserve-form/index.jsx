import moment from 'moment';
import { useState } from 'react'
import { useQuery } from "react-query";
import LineCalendar from "components/elements/line-calendar";
import { getSeats } from "@/api/reserve.js";
import ReserveFormSeat from "components/modules/reserve-form/ReserveFormSeat.jsx";
import { useNavigate } from 'react-router-dom'

import './index.scss'
import {useDispatch} from "react-redux";
import { setData } from "store/slices/reserveSlice.js";

const ReserveForm = ({ title, busyDays, masterId, service }) => {
    const [selectedDate, setDate] = useState(new Date());
    const [selectedTime, setTime] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const query = useQuery(
        ['seats', selectedDate],
        () => getSeats(moment(selectedDate).format('YYYY-MM-DD'), masterId),
        {
            keepPreviousData : true
        }
    )
    const seats = query?.data?.data;

    const onSelectDate = (date) => {
        setDate(date)
        setTime(null);
    }

    const onSubmit = () => {
        dispatch(setData({
            date: moment(selectedDate).format('YYYY-MM-DD'),
            time: selectedTime,
            service: service,
            masterId: masterId,
        }))
        navigate('/send');
    }

    return (
        <div className="reserve-form">
            <h2 className="reserve-form-title">{title}</h2>
            <LineCalendar busyDays={busyDays} date={selectedDate} onSelect={onSelectDate} />
            <div className="reserve-form-wrap">
                {
                    seats?.morning?.length ? <div className="reserve-form-sub">Ранок</div> : null
                }
                <div className="reserve-form-seats">
                    {
                        seats && seats?.morning.map((time) => (
                            <ReserveFormSeat
                                key={time}
                                onClick={() => setTime(time)}
                                active={time === selectedTime}
                                hour={time.Hour}
                            />
                        ))
                    }
                </div>
                {
                    seats?.day?.length ? <div className="reserve-form-sub">День</div> : null
                }
                <div className="reserve-form-seats">
                    {
                        seats && seats?.day.map((time) => (
                            <ReserveFormSeat
                                key={time}
                                onClick={() => setTime(time)}
                                active={time === selectedTime}
                                hour={time.Hour}
                            />
                        ))
                    }
                </div>
                {
                    seats?.evening?.length ? <div className="reserve-form-sub">Вечір</div> : null
                }
                <div className="reserve-form-seats">
                    {
                        seats && seats?.evening.map((time) => (
                            <ReserveFormSeat
                                key={time}
                                onClick={() => setTime(time)}
                                active={time === selectedTime}
                                hour={time.Hour}
                            />
                        ))
                    }
                </div>
                <button disabled={!selectedTime} onClick={onSubmit} className="reserve-form-submit accent-button">ПРОДОВЖИТИ</button>
            </div>
        </div>
    );
};

export default ReserveForm