import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '685100f6bd98935478e496f530b11233'

export const fetchData = async(query) => {
    const response = await axios.get(BASE_URL,{params: {
        q: query,
        units: 'imperial',
        APPID: API_KEY,
     }})

     return response.data
}