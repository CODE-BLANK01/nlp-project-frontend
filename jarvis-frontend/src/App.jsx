import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ChatApp from "./pages/ChatApp";
import { AuthProvider, useAuth } from "./context/AuthContext";
import "./index.css";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

function LoginRedirect({ children }) {
  const { user } = useAuth();
  if (user) return <Navigate to="/app" replace />;
  return children;
}

function CatchAllRedirect() {
  const { user } = useAuth();
  return user ? <Navigate to="/app" replace /> : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/login"
            element={
              <LoginRedirect>
                <Login />
              </LoginRedirect>
            }
          />
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <ChatApp />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<CatchAllRedirect />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}