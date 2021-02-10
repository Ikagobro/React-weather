import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const APIKEY = 'Enter your APIKEY here';

export const fetch = async (req) => {
    const data = await axios.get(URL, {
        params: {
            q: req,
            units: 'metric',
            APPID: APIKEY,
        }
    }).catch();
    return data.data;
}
