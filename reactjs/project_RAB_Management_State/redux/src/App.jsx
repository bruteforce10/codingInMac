import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ShowTable from "./components/ShowTable";
import SideBar from "./components/SideBar";
import AddData from "./components/AddData";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex bg-cyan-50">
          <SideBar />
          <div className="p-4 mx-auto self-center">
            <Routes>
              <Route path="/" element={<ShowTable />} />
              <Route path="/add" element={<AddData />} />
              <Route path="/edit/:id" element={<AddData />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
