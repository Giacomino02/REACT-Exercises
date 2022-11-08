import { HookGithubUser } from "./GithubUser";
import { useParams } from "react-router-dom";

export function ShowGithubUser() {
    const {user} = useParams()
    return (
        <>
            <HookGithubUser username={user} />
        </>
    )
}