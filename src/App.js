import GlobalStyle from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
// components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
