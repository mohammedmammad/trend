import Api from './api';

export default {
    REGISTER(formData) {
        return Api().post('auth/register' , formData);
    },
    UPDATE(formData) {
        return Api().post('auth/update' , formData);
    },
    GET_ENTITIES(){
        return Api().get('entities');
    },
    GET_NATIONALITIES(){
        return Api().get('nationalities');
    },
    SEND_CODE(formData){
        return Api().post('auth/send-code' , formData);
    },
    FORGET_PASSWORD(formData){
        return Api().post('auth/forget-password' , formData);
    },
    VERIFY(formData){
        return Api().post('auth/verify' , formData);
    },
    LOGIN(formData){
        return Api().post('auth/login' , formData);
    },
    ADD_ADDRESS(formData){
        return Api().post('addresses' , formData);
    },
    GET_ADDRESS(){
        return Api().get('addresses');
    },
    DELETE_ADDRESS(data){
        return Api().delete(`addresses/${data.placeId}` , data.place);
    },
    GET_NOTIFICATIONS(){
        return Api().get('notifications-settings');   
    },
    UPDATE_NOTIFICATIONS(formData){
        return Api().patch('notifications-settings' , formData);
    }
};