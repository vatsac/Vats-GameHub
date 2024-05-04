import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {       
        key: 'd033380643534ccf9d491ac42a527f8c'
    }
})