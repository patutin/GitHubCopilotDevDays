import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PlaneDetail from "./pages/PlaneDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planes/:planeId" element={<PlaneDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
