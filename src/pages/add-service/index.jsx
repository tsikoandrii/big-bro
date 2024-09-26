import DefaultLayout from "components/layouts/default/index";
import './index.scss'
import MasterForm from "components/modules/master-form/MasterForm.jsx";
import {useMutation, useQueryClient} from "react-query";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {createMaster} from "@/api/masters.js";
import ServiceForm from "components/modules/service-form/ServiceForm.jsx";
import {createService} from "@/api/services.js";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const AddServicePage = () => {
    const navigate = useNavigate()

    const client = useQueryClient()

    const { mutate: onCreate } = useMutation(({ name }) => createService(name), {
        onSuccess: (data) => {
            // Оновлюємо петиції
            client.invalidateQueries(['services'])
            toast.success('Послугу створено!')

            const id = data?.data?.data?.id

            navigate('/admin/services/edit/' + id)
        },
        onError: (error) => {
            toast.error(error.response.data?.message)
        },
    })

    const auth = useSelector(state => state.user)

    useEffect(() => {
        if (!auth.isAuth) navigate('/')
    }, [auth]);

    return (
        <DefaultLayout action="ДОДАТИ ПОСЛУГУ">
            <ServiceForm
                onCreate={(data) => {
                    onCreate(data)
                }}
            />
        </DefaultLayout>
    )
}

export default AddServicePage