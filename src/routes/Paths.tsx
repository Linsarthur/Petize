import { Route, Routes, HashRouter } from "react-router-dom"; // ✅ tudo do mesmo pacote
import Home from "../pages/Home";
import Profile from "../pages/Profile";

const Paths = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </HashRouter>
  );
};

export default Paths;