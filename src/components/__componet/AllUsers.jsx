import { PostCard } from "./PostCard"
import { RatingCard } from "./RatingCard"

export const AllUsers = () => {
    return(
        <>
            <div className="pl-44 flex flex-col items-center">
            <h1 className="font-bold text-2xl p-4 text-new_navy_blue">Amplia i tuoi <span className="text-new_dark_blue">orizzonti</span></h1>
                <PostCard id={1} />
                <RatingCard id={3} />
                <PostCard id={2} />
            </div>
        </>
    )
}