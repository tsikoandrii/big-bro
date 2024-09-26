import {useNavigate} from "react-router-dom";
import {useQuery} from "react-query";
import {useSelector} from "react-redux";

import moment from "moment";
import 'moment/locale/uk'
moment.locale('uk')

import DefaultLayout from "components/layouts/default/index";
import AppointmentCard from "components/elements/appointment-info/AppointmentCard.jsx";
import AppointmentForm from "components/modules/appointment-form/index";

import {getAppointmentInfo } from "@/api/masters.js";
import './index.scss'
import {useEffect} from "react";
import Loader from "components/elements/loader/index.jsx";

const SendPage = () => {
    const appointmentData = useSelector((state) => state.reserve)
    const navigate = useNavigate()

    const query = useQuery(['appointment-info'], () => getAppointmentInfo(
        appointmentData.service, appointmentData.master
    ))
    const appointmentInfo = query?.data?.data

    const time = `${appointmentData.time?.Hour}, ${moment(appointmentData.date).format('DD MMMM')}`;

    useEffect(() => {
        if (!appointmentData.service || !appointmentData.master) {
            navigate('/')
        }
    }, []);

    return (
        <DefaultLayout onBack action="ВАШ ЗАПИС">
            <AppointmentCard
                serviceName={appointmentInfo?.serviceName}
                masterName={appointmentInfo?.name}
                masterAvatar={appointmentInfo?.avatar}
                price={appointmentInfo?.price}
                date={time}
            />
            <AppointmentForm
                date={appointmentData.date}
                time={appointmentData.time}
                priceId={appointmentData.service}
                masterId={appointmentData.master}
                title="ВАШІ ДАНІ"
            />
        </DefaultLayout>
    )
}

export default SendPage