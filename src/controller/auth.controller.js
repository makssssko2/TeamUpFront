import api from "./http/index.js"

export default class AuthController {

    static async login(email,password) {
        return api.post('/authentication/authorization', {email,password});
    }

    static async registration(email,password,surname,name) {
        return api.post('/authentication/registration', {email,password,lastname: surname,name});
    }
    
    static async logout() {
        return api.post('/logout');
    }
}