import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import ItemListingPage from "./pages/ItemListing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/list-item" element={<ItemListingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
