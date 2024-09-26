import DefaultLayout from "components/layouts/default/index";
import './index.scss'
import MasterForm from "components/modules/master-form/MasterForm.jsx";
import {useMutation, useQueryClient} from "react-query";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {createMaster} from "@/api/masters.js";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const AddMasterPage = () => {
    const navigate = useNavigate()

    const client = useQueryClient()

    const { mutate: onCreate } = useMutation(({name, avatar}) => createMaster(name, avatar), {
        onSuccess: () => {
            // Оновлюємо петиції
            client.invalidateQueries(['masters'])
            toast.success('Майстера створено!')
            navigate('/admin/masters')
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
        <DefaultLayout action="ДОДАТИ МАЙСТРА">
            <MasterForm
                onCreate={(data) => {
                    onCreate(data)
                }}
            />
        </DefaultLayout>
    )
}

export default AddMasterPage