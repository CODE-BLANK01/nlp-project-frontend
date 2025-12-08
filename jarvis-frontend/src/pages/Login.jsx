// import { useState } from "react";
// import { Input } from "../components/ui/Input";
// import { Button } from "../components/ui/Button";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [code, setCode] = useState("");
//   const [step, setStep] = useState("email");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const API_URL = import.meta.env.VITE_API_URL;
//   const TENANT = import.meta.env.VITE_TENANT;

//   const startLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch(`${API_URL}/auth/start`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-Tenant": TENANT,
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();
//       if (data.ok) {
//         setStep("otp");
//       } else {
//         setError(data.error || "Failed to start login");
//       }
//     } catch {
//       setError("Network error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const verifyOtp = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch(`${API_URL}/auth/verify`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-Tenant": TENANT,
//         },
//         body: JSON.stringify({ email, code }),
//         credentials: "include",
//       });

//       const data = await res.json();
//       if (data.ok) {
//         localStorage.setItem("token", data.token);
//         login(data.user); // 🔑 update context
//         navigate("/app");
//       } else {
//         setError(data.error || "Invalid OTP");
//       }
//     } catch {
//       setError("Network error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-50">
//       <form
//         onSubmit={step === "email" ? startLogin : verifyOtp}
//         className="bg-white p-8 rounded-lg shadow-md w-96 space-y-6"
//       >
//         <h2 className="text-2xl font-semibold text-center">
//           {step === "email" ? "Login to Jarvis" : "Enter OTP"}
//         </h2>

//         {step === "email" ? (
//           <Input
//             type="email"
//             placeholder="you@company.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         ) : (
//           <Input
//             type="text"
//             placeholder="Enter the 6-digit OTP"
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//           />
//         )}

//         {error && <p className="text-red-500 text-sm">{error}</p>}

//         <Button type="submit" className="w-full" disabled={loading}>
//           {loading ? "Please wait..." : step === "email" ? "Send OTP" : "Verify"}
//         </Button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowLeft } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState("email");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const API_URL = import.meta.env.VITE_API_URL;
  const TENANT = import.meta.env.VITE_TENANT;

  const startLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/auth/start`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Tenant": TENANT,
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.ok) {
        setStep("otp");
      } else {
        setError(data.error || "Failed to start login");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/auth/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Tenant": TENANT,
        },
        body: JSON.stringify({ email, code }),
        credentials: "include",
      });
      const data = await res.json();
      if (data.ok) {
        localStorage.setItem("token", data.token);
        login(data.user);
        navigate("/app");
      } else {
        setError(data.error || "Invalid OTP");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Back to Home */}
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
              {step === "email" ? (
                <Mail className="w-8 h-8 text-blue-600" />
              ) : (
                <Lock className="w-8 h-8 text-blue-600" />
              )}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {step === "email" ? "Welcome to Ellie AI" : "Verify Your Email"}
            </h2>
            <p className="text-gray-600">
              {step === "email"
                ? "Enter your email to get started"
                : `We sent a code to ${email}`}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={step === "email" ? startLogin : verifyOtp} className="space-y-6">
            {step === "email" ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Verification Code
                </label>
                <Input
                  type="text"
                  placeholder="Enter 6-digit code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full text-center text-2xl tracking-widest"
                  maxLength={6}
                  required
                />
                <button
                  type="button"
                  onClick={() => setStep("email")}
                  className="text-sm text-blue-600 hover:text-blue-700 mt-2"
                >
                  Use a different email
                </button>
              </div>
            )}

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={loading} size="lg">
              {loading
                ? "Please wait..."
                : step === "email"
                ? "Send Verification Code"
                : "Verify & Continue"}
            </Button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </motion.div>
    </div>
  );
}