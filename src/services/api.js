import axios from 'axios';
import store from '../store';
export default () => {
    let Api = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
        withCredentials:false ,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    });

    Api.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response.status === 401) {
                store.dispatch('REGISTRATION', {
                        service: 'LOGOUT',
                        payload: null
                    })
                    .then(() => {
                        location.reload(true);
                    });
            }
            else if(error.response.status === 403){
                //router.push({ name: 'defaulterror', params: { errorCode: error.response.status } })
            }
            return Promise.reject(error.response);
        }
    );

    return Api;
};
