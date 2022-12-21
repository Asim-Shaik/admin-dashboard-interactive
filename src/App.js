import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Charts from "./components/Charts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Charts />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
