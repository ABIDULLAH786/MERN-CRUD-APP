import axios from "axios";
import { SERVER_LINK } from "../Constants";

export default async function checkUser() {
    console.log("here in checker")
    const response = await axios.get(`${SERVER_LINK}/check`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("user")}`
        }
    });
    if (response.status == 403) {
        localStorage.setItem("user", 0);
        console.log("Not Authenticated")
        return false;
    }
    return true;
}