import Layout from "./components/Layout";
import Register from "./components/Register";
import Home from "./Pages/Home";

const { Routes, Route } = require("react-router-dom");

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
