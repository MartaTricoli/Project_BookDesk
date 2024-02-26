import { Outlet, Route, Routes } from "react-router-dom"
import { DevAtWork } from "./components/__componet/DevAtWork"
import { Footer } from "./components/shared/Footer"
import { BasePage } from "./pages/BasePage"
import { Feed } from "./components/__componet/Feed"
import { Tutti } from "./components/__componet/Tutti"
import { Seguiti } from "./components/__componet/Seguiti"

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route path="/devatwork" element={<DevAtWork />} />
          <Route path="/feed" element={<Feed />}>
            <Route path="/feed/tutti" element={<Tutti />}/>
            <Route path="/feed/seguiti" element={<Seguiti />}/>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
