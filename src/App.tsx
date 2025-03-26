import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Email } from "./Pages/Email";
import { Tests } from "./Pages/Tests";
import { Other } from "./Pages/Other";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/email" element={<Email />} />
      <Route path="/tests" element={<Tests />} />
      <Route path="/other" element={<Other />} />
    </Routes>
  );
};
