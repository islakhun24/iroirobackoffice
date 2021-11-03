import Axios from 'axios';
import authHeader from '../services/auth-header';

export function gets(url) {
    return Axios.get(url, { headers: authHeader() });
}
export function puts(url, body) {
    return Axios.put(url, body, { headers: authHeader() });
}

export function deletes(url) {
    return Axios.delete(url, { headers: authHeader() });
}

export function posts(url, body) {
    return Axios.post(url, body, { headers: authHeader() });
}
