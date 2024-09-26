import DefaultLayout from "components/layouts/default/index";
import ReserveForm from "components/modules/reserve-form/index.jsx";

import './index.scss'
import { useQuery } from "react-query";
import { getBusyDaysList } from "@/api/reserve.js";
import { useParams } from "react-router-dom";
import Loader from "components/elements/loader/index.jsx";

const ReservePage = () => {
    const { master, service } = useParams()
    const query = useQuery(['busyDays'], () => getBusyDaysList(master))
    const busyDays = query?.data?.data;

    return (
        <DefaultLayout onBack action="ОБЕРІТЬ ЧАС">
            {query.isLoading && <Loader />}
            <ReserveForm service={service} masterId={master} busyDays={busyDays} title="Оберіть дату і час" />
        </DefaultLayout>
    )
}

export default ReservePage