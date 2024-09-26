/**
 * Get data from local storage.
 *
 * @param {string} key - Storage key
 */
const getData = (key, isJson = false) => {
    try {
        const item = localStorage.getItem(key);

        if (item) {
            if (isJson) return JSON.parse(item)
            else return item
        } else {
            return null
        }

    } catch (error) {
        return null;
    }
};

/**
 * Set data to local storage.
 *
 * @param {string} key - Storage key
 * @param {object} value - Storage value
 */
const setData = (key, value) => {
    try {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value));

            return true;
        }

        return false;
    } catch (error) {
        return false;
    }
};

/**
 * Remove data from local storage.
 *
 * @param {string} key - Storage key
 */
const removeData = (key) => {
    try {
        localStorage.removeItem(key);

        return true;
    } catch (error) {
        return false;
    }
};

const LocalStorage = {
    getData,
    setData,
    removeData,
};

export default LocalStorage;