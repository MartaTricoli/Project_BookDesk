import BarChart from "../components/__componet/AnnualReads"
import Torta from "../components/__componet/torta"

const StatsPage = () => {


    return (
        <div className="flex flex-col items-center mt-32 ">
            libri quest anno
            <Torta />
            libri ne gli anni
            <BarChart />
        </div>
    )
}

export default StatsPage