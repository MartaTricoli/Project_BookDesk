import { PostCard } from "./PostCard"

export const Tutti = () => {
    return(
        <>
            <div className="pl-44 flex flex-col items-center">
                <h1>Tutti i post/votazioni e commenti di tutti gli utenti</h1>
                <PostCard />
                <PostCard />
            </div>
        </>
    )
}