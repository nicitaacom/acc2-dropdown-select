/* react */
import { Route, Routes } from "react-router-dom"
/* components */

/* sections */
import { HomePage } from "./pages"

function App() {

  return (
    <>
          <Routes>
           <Route path="/" element={<HomePage/>}/>
         </Routes>
    </>
  )
}

export default App
