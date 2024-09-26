import { useQuery } from 'react-query'

import { getMastersList } from "@/api/masters";
import { HOME_PAGE_URL } from "constants/main";
import getImageUrl from "@/utils/getImageUrl";

import DefaultLayout from "components/layouts/default/index";
import Master from "components/elements/master/Master";
import Loader from "components/elements/loader";

import './index.scss'
const Homepage = () => {
    const query = useQuery(['masters'], () => getMastersList())
    const masters = query?.data?.data?.data

    return (
        <DefaultLayout onClose={() => window.location.href = HOME_PAGE_URL} action="ОБЕРІТЬ МАЙСТРА">
            {query.isLoading && <Loader />}
            <div className="masters">
                {
                    masters ? masters.map(master =>
                        <Master
                            key={master?.id}
                            to={'/master/' + master?.id}
                            name={master?.attributes?.name}
                            avatar={getImageUrl(master?.attributes?.avatar)}
                        />
                    ) : null
                }
            </div>
        </DefaultLayout>
    )
}

export default Homepage