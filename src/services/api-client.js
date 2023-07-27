import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5d3f8b27ef2c49f39076caf36e152e4b'
    }
})