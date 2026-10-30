import { useEffect, useState } from "react";
import type { GitHubUserProps } from "../../interfaces/GitHubUserProps";
import { fetchGitHubUser } from "../../services/ClientGitHub";

const GitHubUser: React.FC<GitHubUserProps> = ({ username }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [user, setUserData] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean | null>(true); 
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchGitHubUser(username)
            .then(response => {
                setUserData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [username]);

    if (loading) return <div> Loading... </div>;
    if (error) return <div> Error: {error} </div>;

    return (
        <>
            <div>
                <img src={user?.avatar_url} alt={`${username}'s avatar`} width="100" />
                <h2>{user?.name || user?.login}</h2>
                <p>{user?.bio}</p>
                <p>Public Repos: {user?.public_repos}</p>
                <p>Followers: {user?.followers}</p>
                <p>Following: {user?.following}</p>
            </div>
        </>
    );
};
export default GitHubUser;