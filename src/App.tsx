import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Article from "./pages/Article";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="articulo/:id" element={<Article />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Route>
    </Routes>
  );
}

export default App;
