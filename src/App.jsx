import { Outlet, Route, Routes } from "react-router-dom"
import { DevAtWork } from "./components/__componet/DevAtWork"
import { Footer } from "./components/shared/Footer"

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Footer />}>
          <Route path="/devatwork" element={<DevAtWork />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
