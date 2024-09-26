import {STRAPI_URL} from "constants/main.js";

const getImageUrl = function (imageObj) {
    if (imageObj) return imageObj.data?.attributes?.formats?.thumbnail?.url;
}

export default getImageUrl;