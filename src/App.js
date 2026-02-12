import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Update from "./pages/Update";
import Create from "./pages/Create";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-8">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-blue-600 transition duration-200"
          >
            Home
          </Link>

          <Link
            to="/Create"
            className="text-gray-700 font-medium hover:text-blue-600 transition duration-200"
          >
            Create
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Update />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
