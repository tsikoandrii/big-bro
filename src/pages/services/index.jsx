import { useQuery } from 'react-query'
import {useNavigate, useParams} from "react-router-dom";

import {getServices, getServicesList} from "@/api/masters";

import DefaultLayout from "components/layouts/default/index";
import Service from "components/elements/service/Service.jsx";

import './index.scss'
import Loader from "components/elements/loader/index.jsx";
import {useSelector} from "react-redux";
import {useEffect} from "react";
const ServicesPage = () => {
    const query = useQuery(['original_services'], () => getServices())
    const services = query?.data?.data?.data

    const navigate = useNavigate()

    const auth = useSelector(state => state.user)

    useEffect(() => {
        if (!auth.isAuth) navigate('/')
    }, [auth]);

    return (
        <DefaultLayout onAdd={() => navigate('/admin/services/add') } action="ПОСЛУГИ">
            {query.isLoading && <Loader />}
            <div className="services">
                {
                    services ? services.map(service =>
                        <Service
                            key={service?.id}
                            to={'/admin/services/edit/' + service?.id}
                            title={service?.attributes?.title}
                            price={null}
                        />
                    ) : null
                }
            </div>
        </DefaultLayout>
    )
}

export default ServicesPage