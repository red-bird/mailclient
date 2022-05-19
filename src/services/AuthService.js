import $api from "../http";

export default class AuthService {
    static async login(username: string, password: string): Promise {
        console.log("hello")
        return $api.post('/api/login', {username, password})
    }

    static async registration(username: string, password: string): Promise {
        return $api.post('/api/registration', {username, password})
    }

    // static async logout(): Promise {
    //     return $api.post('/logout')
    // }
}