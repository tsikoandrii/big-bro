import axiosInstance from '@/utils/axiosInstance'

export async function getBusyDaysList(masterId) {
    return await axiosInstance.get(`/busy-days?master=${masterId}`)
}

export async function getSeats(date, masterId) {
    return await axiosInstance.get(`/seats?date=${date}&master=${masterId}`)
}