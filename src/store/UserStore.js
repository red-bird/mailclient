import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";

export default class UserStore {
    user = {}
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user) {
        console.log(user)
        this.user = user;
        console.log(this.user)
    }

    setLoading(bool: boolean) {
        this.isLoading = bool
    }

    async login(username: string, password: string) {
        try {
            console.log("Hi")
            const response = await AuthService.login(username, password);
            console.log(response);
            localStorage.setItem('user', JSON.stringify(response.data));
            this.setAuth(true);
            this.setUser(response.data);
            console.log(response.data);
            return response;
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(username: string, password: string) {
        try {
            const response = await AuthService.registration(username, password);
            console.log(response);
            // localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data));
            this.setAuth(true);
            this.setUser(response.data);
            return response;
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            localStorage.removeItem('user');
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {

            if (localStorage.getItem('user') === null) {
                return
            }
            // const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            // localStorage.setItem('token', response.data.token);
            this.setAuth(true);
            this.setUser(JSON.parse(localStorage.getItem('user')));
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }

}