import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./page/nav";
import Main1 from "./page/main1";
import Banner from "./page/banner";
import Features from "./page/features";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Main1 />} />
          <Route path="/" element={<Banner />} />
          <Route path="/" element={<Features />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
