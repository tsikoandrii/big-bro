import { useMutation, useQuery, useQueryClient } from 'react-query'

import DefaultLayout from "components/layouts/default/index";
import Loader from "components/elements/loader";
import CheckoutCard from "components/elements/checkout";

import './index.scss'
import { deleteCheckout, getCheckoutsList } from "@/api/checkout.js";
import moment from "moment/moment.js";
import {toast} from "react-toastify";
import { confirmAlert } from 'react-confirm-alert'
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";


const renderCheckoutsCards = (checkouts = [], onActionHandler) => {
    return checkouts.map((checkout) => {
        const customer = checkout?.attributes?.customer?.data?.attributes;
        const price = checkout?.attributes?.service?.data?.attributes;
        const service = checkout?.attributes?.service?.data?.attributes?.service;
        const master = checkout?.attributes?.service?.data?.attributes?.master;
        const avatar = master?.data?.attributes?.avatar?.data?.attributes;

        const time = `${checkout?.attributes?.time}, ${moment(checkout?.attributes?.date).format('DD MMMM')}`;

        return (
            <CheckoutCard
                key={checkout?.id}
                masterName={master?.data?.attributes?.name}
                masterAvatar={avatar?.formats?.large?.url}
                price={price?.amount}
                serviceName={service?.data?.attributes?.title}
                date={time}
                customerName={customer?.name}
                customerPhone={customer?.phone}
                id={checkout?.id}
                onDelete={() => onActionHandler(checkout?.id)}
            />
        )
    })
}

const AllCheckoutsPage = () => {
    const query = useQuery(['checkouts'], () => getCheckoutsList())
    const checkouts = query?.data?.data?.data

    const navigate = useNavigate()

    const client = useQueryClient()

    const { mutate: onDelete } = useMutation((id) => deleteCheckout(id), {
        onSuccess: () => {
            // Оновлюємо петиції
            client.invalidateQueries(['checkouts'])
            toast.success('Видалено успішно!')
        },
        onError: (error) => {
            toast.error(error.response.data?.message)
        },
    })

    const auth = useSelector(state => state.user)

    useEffect(() => {
        if (!auth.isAuth) navigate('/')
    }, [auth]);

    const onActionHandler = (id) => {

        confirmAlert({
            title: 'Підтвердження дії',
            message: 'Ви впевнені?',
            buttons: [
                {
                    label: 'Так!',
                    onClick: () => onDelete(id),
                },
                {
                    label: 'Ні',
                    onClick: () => {},
                },
            ],
        })
    }

    return (
        <DefaultLayout onAdd={() => navigate('/') } action="УСІ ЗАПИСИ">
            {query.isLoading && <Loader />}
            <div className="checkouts">
                {renderCheckoutsCards(checkouts, onActionHandler)}
            </div>
        </DefaultLayout>
    )
}

export default AllCheckoutsPage