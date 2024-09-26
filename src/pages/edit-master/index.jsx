import DefaultLayout from "components/layouts/default/index";
import './index.scss'
import MasterForm from "components/modules/master-form/MasterForm.jsx";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import {createMaster, deleteMaster, editMaster, getMaster, getServicesList} from "@/api/masters.js";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const EditMasterPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const client = useQueryClient()

    const { mutate: onUpdate } = useMutation(({id, name, avatar}) => editMaster(id, name, avatar), {
        onSuccess: () => {
            client.invalidateQueries(['masters'])
            toast.success('Збережено!')
            navigate('/admin/masters')
        },
        onError: (error) => {
            toast.error(error.response.data?.message)
        },
    })

    const { mutate: onDelete } = useMutation((id) => deleteMaster(id), {
        onSuccess: () => {
            client.invalidateQueries(['masters'])
            toast.success('Майстера видалено!')
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
        <DefaultLayout action="РЕДАГУВАТИ МАЙСТРА">
            <MasterForm
                onUpdate={(data) => {
                    onUpdate(data)
                }}
                onDelete={() => {
                    onDelete(id)
                }}
                masterId={id}
            />
        </DefaultLayout>
    )
}

export default EditMasterPage