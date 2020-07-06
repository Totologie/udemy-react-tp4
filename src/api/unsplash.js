import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID BMdFJ2C4f-wza0fDfm6Bd81WwO5SyjhW6nUEpT9WC2M'
    }
})