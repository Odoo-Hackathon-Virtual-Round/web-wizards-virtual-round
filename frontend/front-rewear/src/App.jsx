import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { authService } from "./services/authService";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import BrowsePage from "./pages/BrowsePage";
import ProductDetailPage from "./pages/ProductDetailPage"; // Add this import

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!authService.getToken();
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/browse"
          element={
            <ProtectedRoute>
              <BrowsePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetailPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
