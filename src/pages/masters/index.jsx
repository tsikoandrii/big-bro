import { useQuery } from 'react-query'

import { getMastersList } from "@/api/masters";
import { HOME_PAGE_URL } from "constants/main";
import getImageUrl from "@/utils/getImageUrl";

import DefaultLayout from "components/layouts/default/index";
import Master from "components/elements/master/Master";
import Loader from "components/elements/loader";

import './index.scss'
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";
const MastersPage = () => {
    const query = useQuery(['masters'], () => getMastersList())
    const masters = query?.data?.data?.data
    const navigate = useNavigate()

    const auth = useSelector(state => state.user)

    useEffect(() => {
        if (!auth.isAuth) navigate('/')
    }, [auth]);

    return (
        <DefaultLayout onAdd={() => navigate('/admin/masters/add') } action="МАЙСТРИ">
            {query.isLoading && <Loader />}
            <div className="masters">
                {
                    masters ? masters.map(master =>
                        <Master
                            key={master?.id}
                            to={'/admin/masters/edit/' + master?.id}
                            name={master?.attributes?.name}
                            avatar={getImageUrl(master?.attributes?.avatar)}
                        />
                    ) : null
                }
            </div>
        </DefaultLayout>
    )
}

export default MastersPage