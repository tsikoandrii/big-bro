import axiosInstance from '@/utils/axiosInstance'
import qs from "qs";
export async function createCheckout(name, phone, priceId, date, time, masterId) {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('phone', phone)
    formData.append('priceId', priceId)
    formData.append('date', date)
    formData.append('time', JSON.stringify(time))
    formData.append('masterId', masterId)

    return await axiosInstance
        .post(`/create-checkout`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((res) => {
            return res
        })
}

export async function deleteCheckout(id) {
    console.log(id)
    return await axiosInstance.delete(`/delete-checkout?id=${id}`)
}

export async function getCheckoutsList() {
    const params = {
        populate: {
            customer: '*',
            service: {
                populate: {
                    master: {
                        fields: ['name'],
                        populate: ['avatar']
                    },
                    service: {
                        fields: ['title'],
                    }
                }
            },
        }
    }
    return await axiosInstance.get(`/appointments?`+ qs.stringify(params))
}

export async function exportAppointments() {
    return await axiosInstance.get(`/export-appointments`)
}

export async function exportClients() {
    return await axiosInstance.get(`/export-customers`)
}