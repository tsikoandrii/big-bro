import DefaultLayout from "components/layouts/default/index";
import './index.scss'
import {useMutation, useQuery, useQueryClient} from "react-query";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import {deleteService, editService} from "@/api/services.js";
import ServiceForm from "components/modules/service-form/ServiceForm.jsx";
import {getMastersList} from "@/api/masters.js";
import {getPriceList} from "@/api/pricelist.js";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const EditServicePage = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const query = useQuery(['prices'], () => getPriceList(id), { cacheTime: 0 })
    const prices = query?.data?.data?.data;

    const masterQuery = useQuery(['masters'], () => getMastersList(), { cacheTime: 0 })
    const masters = masterQuery?.data?.data?.data;

    const client = useQueryClient()

    const { mutate: onUpdate } = useMutation(({id, name, prices}) => editService(id, name, prices), {
        onSuccess: () => {
            client.invalidateQueries(['prices'])
            toast.success('Збережено!')
            navigate('/admin/services')
        },
        onError: (error) => {
            toast.error(error.response.data?.message)
        },
    })

    const { mutate: onDelete } = useMutation((id) => deleteService(id), {
        onSuccess: () => {
            client.invalidateQueries(['services'])
            toast.success('Послугу видалено!')
            navigate('/admin/services')
        },
        onError: (error) => {
            toast.error(error.response.data?.message)
        },
    })

    const priceList = prices?.map(price => {
        return {
            id: price.id,
            amount: price.attributes.amount,
            master: price.attributes.master.data.id,
        }
    })

    const auth = useSelector(state => state.user)

    useEffect(() => {
        if (!auth.isAuth) navigate('/')
    }, [auth]);

    return (
        <DefaultLayout action="РЕДАГУВАТИ ПОСЛУГУ">
            <ServiceForm
                onUpdate={(data) => {
                    onUpdate(data)
                }}
                onDelete={() => {
                    onDelete(id)
                }}
                serviceId={id}
                priceList={priceList}
                masters={masters}
            />
        </DefaultLayout>
    )
}

export default EditServicePage