import { PostCard } from "./PostCard"

export const Follow = () => {
    return(
        <>
            <div className="pl-44 flex flex-col items-center">
                <h1>Tutti i post/votazioni e commenti delgi utenti seguiti</h1>
                <PostCard />
                <PostCard />
            </div>
        </>
    )
}