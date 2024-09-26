import {useForm} from "react-hook-form";
import React, {useEffect, useState} from "react";
import {getService} from "@/api/services.js";
import {NavLink} from "react-router-dom";
import PriceItem from "components/elements/price-item/PriceItem.jsx";
import {useQuery} from "react-query";
import {getPriceList} from "@/api/pricelist.js";

const ServiceForm = ({ title, onCreate, onUpdate, onDelete, serviceId, priceList, masters = [] }) => {
    const [prices, setPrices] = useState(priceList)

    const getServiceName = async () => {
        if (serviceId) {
            const data = await getService(serviceId)
            return {
                name: data?.data?.data?.attributes?.title
            }
        } else {
            return {
                name: ""
            }
        }
    }

    const { register, handleSubmit } = useForm({
        defaultValues: async () => await getServiceName()
    })

    const onSubmit = (data, action) => {
        if (action === 'create') {
            onCreate({ name: data.name })
        }
        if (action === 'delete') {
            onDelete()
        }
        if (action === 'update') {
            onUpdate({ name: data.name, id: serviceId, prices })
        }
    }

    const changeHandler = (data) => {

        const current = prices.filter((price) => price.id === data.id)[0]

        if (data.action === 'delete') {
            if (current.created) {
                setPrices((prevState) => prevState.filter(item => item.id !== current.id))
            } else {
                setPrices((prevState) => {
                    return prevState.map((item) => {
                        if (item.id === current.id) {
                            return {...item, action: "delete"}
                        }
                        else return item
                    })
                })
            }
        } else {
            setPrices((prevState) => {
                return prevState.map((price) => {
                    if (price.id === current.id) return {...price, ...data}
                    else return price
                })
            })
        }
    }

    const createNew = () => setPrices(prevState => {
        return [
            ...prevState, { amount: 0, master: null, created: true, id: Date.now() }
        ]
    })

    useEffect(() => {
        setPrices(priceList)
    }, [priceList]);

    return (
        <form className="appointment-form">
            <div className="appointment-form-title">{title}</div>
            <input {...register('name', { required: true })} type="text" className="default-input" placeholder="Назва послуги"/>
            <div className="price-items">
                {
                    prices?.length ? prices.map((price, index) =>
                        price.action !== 'delete' ?
                            <PriceItem
                                key={index}
                                master={price.master}
                                amount={price.amount}
                                id={price.id}
                                onChange={changeHandler}
                                masters={masters}
                            /> : null
                    ) : null
                }
                {
                    !onCreate && <button type="button" onClick={createNew} className="price-items-create">Додати нову ціну</button>
                }
            </div>
            {
                onCreate && <button
                    onClick={handleSubmit((data) => onSubmit(data, 'create'))}
                    className="accent-button"
                >
                    ДОДАТИ</button>
            }
            {
                onUpdate && <button onClick={handleSubmit((data) => onSubmit(data, 'update'))} data-action="update" className="accent-button">ЗБЕРЕГТИ</button>
            }
            {
                onDelete && <button onClick={handleSubmit((data) => onSubmit(data, 'delete'))} className="accent-button accent-button--red">ВИДАЛИТИ</button>
            }
        </form>
    );
};

export default ServiceForm;