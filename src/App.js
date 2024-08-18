import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Nav from "./page/nav";
import Home from "./page/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
