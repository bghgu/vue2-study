import axios from 'axios'

import { URL } from '../constants'

export const getText = (code) => {
    return new Promise(async (resolve) => {
        try {
            let result = await axios.get(`${URL}/${code}`);
            resolve(result)
        } catch (error) {
            resolve(false);
            console.error(error)
        }
    })
};