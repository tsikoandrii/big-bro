import DefaultLayout from "components/layouts/default/index";
import './index.scss'
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {exportAppointments, exportClients} from "@/api/checkout.js";
import {STRAPI_URL} from "constants/main.js";

const AdditionalPage = () => {
    const navigate = useNavigate()

    const auth = useSelector(state => state.user)

    useEffect(() => {
        if (!auth.isAuth) navigate('/')
    }, [auth]);

    const exportClientsHandler = async () => {
        const { data } = await exportClients();

        window.open(STRAPI_URL + '/' + data, '_blank');
    }

    const exportAppointmentsHandler = async () => {
        const { data } = await exportAppointments()

        window.open(STRAPI_URL + '/' + data, '_blank');
    }

    return (
        <DefaultLayout action="ДОДАТКОВО">
            <div className="additional-page">
                <div onClick={exportClientsHandler} className="accent-button">ЕКСПОРТ КЛІЄНТІВ</div>
                <div onClick={exportAppointmentsHandler} className="accent-button">ЕКСПОРТ ЗАЯВОК</div>
            </div>
        </DefaultLayout>
    )
}

export default AdditionalPage