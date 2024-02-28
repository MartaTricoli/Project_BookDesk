import { PostCard } from "./PostCard"
import { QuoteCard } from "./QuoteCard"
import { RatingCard } from "./RatingCard"

export const Follow = () => {
    return(
        <>
            <div className="pl-44 flex flex-col items-center">
                <h1 className="font-bold text-2xl p-4 text-new_navy_blue">Scopri post, votazioni e commenti degli utenti che <span className="text-new_dark_blue">segui</span></h1>
                <PostCard id={1} />
                <PostCard id={2} />
                <RatingCard id={3}/>
                <QuoteCard id={10} />
            </div>
        </>
    )
}
