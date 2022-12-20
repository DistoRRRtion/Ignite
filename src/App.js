// components and pages
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
