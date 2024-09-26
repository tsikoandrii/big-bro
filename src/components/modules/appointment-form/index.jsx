import './index.scss'
import {useState} from "react";
import InputMask from 'react-input-mask';
import {useMutation} from "react-query";
import {createCheckout} from "@/api/checkout.js";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {HOME_PAGE_URL} from "constants/main.js";
import { useNavigate } from "react-router-dom";
import Loader from "components/elements/loader/index.jsx";
import {useSelector} from "react-redux";

const AppointmentForm = ({ title, priceId, date, time, masterId }) => {
    const navigate = useNavigate()
    const [isSuccess, setSuccess] = useState(false)
    const { register, handleSubmit } = useForm()
    const isAuth = useSelector(state => state.user.isAuth)

    const { mutate: onSubmit, isLoading } = useMutation((data) => createCheckout(data.name, data.phone, priceId, date, time, masterId), {
        onSuccess: () => {
            setSuccess(true);
            if (isAuth) {
                navigate('/admin/all')
            } else {
                setTimeout(() => window.location.href = HOME_PAGE_URL, 2000)
            }
        },
        onError: (error) => {
            toast.error(error.response.data?.message)
        },
    })


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="appointment-form">
            {isLoading && <Loader />}
            <div className="appointment-form-title">{title}</div>
            <input {...register('name', { required: true })} type="text" className="default-input" placeholder="Ім’я"/>
            <InputMask mask="+380 99-999-99-99" {...register('phone', { required: true })}>
                {(inputProps) => <input {...inputProps} type="tel" className="default-input" placeholder="Номер телефону" />}
            </InputMask>
            <button className="accent-button">ЗАПИСАТИСЬ</button>
            {
                isSuccess ? <div className="appointment-form-success">ДЯКУЄМО, ЗАПИС СТВОРЕНО !</div> : null
            }
        </form>
    );
};

export default AppointmentForm;