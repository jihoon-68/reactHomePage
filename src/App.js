import {BrowserRouter,Routes,Route, Outlet} from "react-router-dom";
import Nav from "./page/nav";

function App() {
  return (
   < BrowserRouter>
    < Routes>
      < Route path="/" element={<Nav />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
