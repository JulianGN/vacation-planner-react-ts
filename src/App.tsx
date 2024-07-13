import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Results from "./views/Results";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
};

export default App;
