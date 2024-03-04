import { Link } from "react-router-dom";

const BookCardLibrary = () => {
    return(
        <>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg hover:shadow-new_pastel_blue shadow-new_pastel_blue max-w-md m-4">
                {/* //image */}
                <div className="mb-4 flex justify-center">
                    <Link>
			            <img src="https://i.pinimg.com/originals/a1/f8/87/a1f88733921c820db477d054fe96afbb.jpg" alt="Post Image" className="h-48 object-cover rounded-md" />
                    </Link>
                    <div className="text-new_navy_blue pl-4 pt-2">
                        <Link>
                            <h3 className="font-bold">Il buio oltre la siepe,</h3>
                        </Link>
                        <Link>
                            <h2 className="font-medium">Scott Whitehead</h2>
                        </Link>
                        <div className="flex items-center justify-center gap-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Rating_stars_2.5.svg/2560px-Rating_stars_2.5.svg.png" alt="" className="w-24 pt-10 pb-10"/>
                            <span>3.5</span>
                        </div>
                        <div>
                            Letto
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookCardLibrary;