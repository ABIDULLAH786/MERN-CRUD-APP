import axios from "axios";
import { SERVER_LINK } from "../Constants";

export default async function checkUser() {
    const response = await axios.get(`${SERVER_LINK}/check`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("user")}`
        }
    });
    if (response.status === 403) {
        localStorage.setItem("user", 0);
        return false;
    }
    return true;
}