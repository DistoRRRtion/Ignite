// components and pages
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyles";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/game/:id" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
