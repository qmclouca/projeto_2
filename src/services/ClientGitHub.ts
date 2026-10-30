import axios from "axios";
const apiClient = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        'Content-Type': 'application/json'
    }
})

export const fetchGitHubUser = (username: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return apiClient.get<any>(`/users/${username}`);
}