import axios from "axios";
import { User } from "../../model/User";

export class UserService {
    checkLogin = (user: User) => {
        axios.post('http://localhost:8080/API/user', user).then(response => {
            const cookieValue = response.data;
            cookieValue ? document.cookie = `account` : console.log("toang") ;
            console.log(user)
            console.log(response.data)
            return response.data
        })
    }
}

export const userService = new UserService();