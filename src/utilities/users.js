import axios from "axios";
import { constants } from "../constants"

export const createNewUser = async (data, cb = (error, data) => {}) => {
    try {
        const response = await axios({
            url: `${constants.API_HOST}/api/users`,
            method: "POST",
            data
        });

        if (typeof cb === "function") {
            return cb(null, response.data);
        }
    } catch (error) {
        if (typeof cb === "function") {
            return cb(error, null);
        } else {
            throw error;
        }
    }
}