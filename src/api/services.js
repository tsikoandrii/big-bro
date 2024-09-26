import axiosInstance from '@/utils/axiosInstance'
export async function createService(name) {

    return await axiosInstance.post(`/services`, {
        data: {
            title: name
        }
    })
}

export async function editService(id, name, prices) {

    await Promise.all(prices.map(async price => {

        if (price.created) {
            if (price.amount && price.master) {
                return await axiosInstance.post(`/prices`, {
                    data: {
                        master: price.master,
                        service: id,
                        amount: price.amount
                    }
                })
            }
        } else {
            if (price.action === 'update') {
                await axiosInstance.put(`/prices/${price.id}`, {
                    data: {
                        amount: price.amount,
                        master: price.master,
                    }
                })
            }
            if (price.action === 'delete') {
                await axiosInstance.delete(`/prices/${price.id}`)
            }
        }
    }))

    return await axiosInstance.put(`/services/${id}`, {
        data: {
            title: name
        }
    })
}
export async function deleteService(id) {
    await axiosInstance.delete(`/delete-prices-service/?id=${id}`)
    return await axiosInstance.delete(`/services/${id}`)
}

export async function getService(id) {
    return await axiosInstance.get(`/services/${id}`)
}
