import qs from 'qs';
import axiosInstance from '@/utils/axiosInstance'

export async function getMastersList(type) {
    return await axiosInstance.get(`/masters?populate=*`)
}

export async function getServicesList(id) {
    const params = {
        populate: ['master', 'service'],
        filters: {
            master: { id },
        },
    }
    return await axiosInstance.get(`/prices?`+ qs.stringify(params))
}

export async function getServices() {
    return await axiosInstance.get(`/services?populate=*`)
}

export async function getAppointmentInfo(service, master) {
    return await axiosInstance.get(`/appointment-info?service=${service}&master=${master}`)
}

export async function createMaster(name, avatar) {

    const formData = new FormData();

    formData.append('data', JSON.stringify({
        name, busy: {}
    }));

    formData.append('files.avatar', avatar)

    return await axiosInstance.post(`/masters`, formData)
}

export async function editMaster(id, name, avatar) {

    const formData = new FormData();

    formData.append('data', JSON.stringify({
        name
    }));

    if (avatar) formData.append('files.avatar', avatar)

    return await axiosInstance.put(`/masters/${id}`, formData)
}
export async function deleteMaster(id) {
    await axiosInstance.delete(`/delete-prices-master/?id=${id}`)
    return await axiosInstance.delete(`/masters/${id}`)
}

export async function getMaster(id) {
    return await axiosInstance.get(`/masters/${id}`)
}
