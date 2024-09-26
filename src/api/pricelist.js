import qs from 'qs';
import axiosInstance from '@/utils/axiosInstance'

export async function getPriceList(serviceId) {
    const params = {
        populate: ['master'],
        filters: {
            service: { id: serviceId },
        },
    }
    return await axiosInstance.get(`/prices?`+ qs.stringify(params))
}
export async function createPrice(master, service, amount) {

    return await axiosInstance.post(`/prices`, {
        data: {
            master, service, amount
        }
    })
}

export async function editPrice(id, amount) {
    return await axiosInstance.put(`/prices/${id}`, {
        data: {
            amount
        }
    })
}
export async function deletePrice(id) {
    return await axiosInstance.delete(`/prices/${id}`)
}

export async function getPrice(id) {
    return await axiosInstance.get(`/prices/${id}`)
}
