import api from "./http/index.js"

export default class AuthController {

    static async login(email,password) {
        return api.post('/login', {email,password});
    }

    static async registration(email,password,birthday,name) {
        return api.post('/registration', {email,password,birthday,name});
    }
    
    static async logout() {
        return api.post('/logout');
    }
}