import Api from './api';

export default {
    GET_USER_DETAILS() {
        return Api().get('todos/1');
    },
    GET_POST(){
        return Api().get('posts');
    }
};
