import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AddProduct, EditProduct, ShowProduct } from "./components";

function App() {
  return (
    <div className="container mt-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowProduct />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
