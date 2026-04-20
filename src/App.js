import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Update from "./pages/Update";
import Create from "./pages/Create";
import UploadFile from "./pages/UploadFile";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white shadow-lg fixed top-0 left-0 w-full z-50 border-b border-gray-200">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-8">
    
    <Link
      to="/"
      className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition duration-200"
    >
      Home
    </Link>

    <Link
      to="/Create"
      className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition duration-200"
    >
      Create
    </Link>

    <Link
      to="/UploadFile"
      className="text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition duration-200"
    >
      Upload File
    </Link>

  </div>
</div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Update />} />
        <Route path="/Create" element={<Create />} />
      <Route path="/UploadFile" element={<UploadFile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
