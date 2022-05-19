import $api from "../http";

export default class UserService {
    static fetchUsers(): Promise {
        return $api.get('/users')
    }
}