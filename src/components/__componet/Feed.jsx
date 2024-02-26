import { Link, Outlet } from "react-router-dom"

export const Feed = () => {
    return(
        <>
            <div className="bg-new_beige">
                <div className="flex pl-44 pt-4 pb-12 justify-center items-center">
                    <h3 className="text-center text-4xl font-bold py-4 text-new_navy_blue w-[500px] flex-nowrap">Scopri tutte le novità della comunity <span className="text-new_orange">BookDesk</span></h3>
                    <img className="w-[200px]" src="https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-book-clipart-vector-png-image_6653535.png" alt="" />
                </div>
                <div className="flex justify-center gap-24 pb-4 pl-44">
                    <Link to="seguiti">
                        <div className="relative px-5 py-2 font-medium text-white group">
                            <span className="absolute inset-0 w-[90px] transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-new_light_blue group-hover:bg-new_dark_blue group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-[90px] transition-all duration-300 ease-out transform skew-x-12 bg-new_dark_blue group-hover:bg-new_light_blue group-hover:-skew-x-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                            <span className="relative">Seguiti</span>
                        </div>
                    </Link>
                    
                    <Link to="tutti">
                        <div className="relative px-5 py-2 font-medium text-white group">
                            <span className="absolute inset-0 w-[70px] transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-new_light_blue group-hover:bg-new_dark_blue group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-[70px] transition-all duration-300 ease-out transform skew-x-12 bg-new_dark_blue group-hover:bg-new_light_blue group-hover:-skew-x-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                            <span className="relative">Tutti</span>
                        </div>
                    </Link>
                </div>
                <Outlet />
            </div>
        </>
    )
}