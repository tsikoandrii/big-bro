import './index.scss'
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useQueryClient} from "react-query";
import {getToken} from "@/api/auth.js";
import {toast} from "react-toastify";
import {setToken} from "store/slices/userSlice.js";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const queryClient = useQueryClient()

    const onSubmit = async (data) => {
        const response = await getToken(data.email, data.password)

        if (response.status === 400) {
            const code = response.data?.code

            toast.error("Невірний пароль!")
        }

        // Успішна авторизація
        if (response.data.jwt) {
            dispatch(setToken(response.data.jwt))
            // Інвалідуємо всі квері для оновлення
            queryClient.invalidateQueries()
            toast.success('Вас авторизовано')
            navigate('/admin/all');
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <input {...register('email', { required: true })} type="email" className="login-form-password" placeholder="E-mail" />
            <input {...register('password', { required: true })} type="password" className="login-form-password" placeholder="Пароль" />
            <button className="login-form-submit">ВХІД</button>
        </form>
    );
};

export default LoginForm;