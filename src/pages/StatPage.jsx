import BarChart from "../components/__componet/AnnualReads"
import Torta from "../components/__componet/torta"

const StatsPage = () => {


    return (
        <div className="flex flex-col items-center mt-32 dark:bg-new_navy_blue">
            libri quest anno
            <Torta  /* importare props *//>
            libri ne gli anni
            <BarChart />
        </div>
    )
}

export default StatsPage