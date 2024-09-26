import { useQuery } from 'react-query'
import { useParams } from "react-router-dom";

import { getServicesList } from "@/api/masters";

import DefaultLayout from "components/layouts/default/index";
import Service from "components/elements/service/Service.jsx";

import './index.scss'
import Loader from "components/elements/loader/index.jsx";
const MasterPage = () => {
    const { id } = useParams()
    const query = useQuery(['services'], () => getServicesList(id))
    const services = query?.data?.data?.data

    return (
        <DefaultLayout onBack action="ОБЕРІТЬ ПОСЛУГУ">
            {query.isLoading && <Loader />}
            <div className="services">
                {
                    services ? services.map(service =>
                        <Service
                            key={service?.id}
                            to={"/reserve/" + service?.attributes?.master?.data?.id + '/' + service?.id}
                            title={service?.attributes?.service?.data?.attributes?.title}
                            price={service?.attributes?.amount}
                        />
                    ) : null
                }
            </div>
        </DefaultLayout>
    )
}

export default MasterPage