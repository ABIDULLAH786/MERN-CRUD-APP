import axios from "axios";
import { SERVER_LINK } from "../Constants";
import authHeader from "./header.auth";

export default async function checkUser() {
    const response = await axios.get(`${SERVER_LINK}/check`, { headers: authHeader() });
    const data = await response.json();
    if (response.status === 200)
        return true;
    else return false;
}