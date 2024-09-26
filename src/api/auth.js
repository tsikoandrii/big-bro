import axiosInstance from '@/utils/axiosInstance'

/**
 * @param password
 * @returns {Promise<T>}
 *
 * Отримання токена від Wordpress API
 * Плагін - JWT Authentication for WP REST API
 */

export async function getToken(email, password) {

    return await axiosInstance
        .post(`/auth/local`, { identifier: email, password: password })
        .then((res) => {
            return res
        })
        .catch((err) => {
            console.log(err)
            return err.response
        })
}