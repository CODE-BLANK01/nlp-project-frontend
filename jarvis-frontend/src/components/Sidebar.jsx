// import { Home, BookOpen, Settings, LogOut } from "lucide-react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function Sidebar() {
//   const navigate = useNavigate();
//   const { logout } = useAuth();

//   const links = [
//     { to: "/app", label: "Dashboard", icon: <Home className="w-5 h-5" /> },
//     { to: "/knowledge", label: "Knowledge Base", icon: <BookOpen className="w-5 h-5" /> },
//     { to: "/settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
//   ];

//   return (
//     <aside className="w-64 bg-black text-white flex flex-col py-8 px-4 shadow-lg">
//       {/* Logo / Title */}
//       <button
//         onClick={() => navigate("/")}
//         className="text-xl font-bold mb-10 px-3 text-left hover:text-gray-300 transition"
//       >
//         Jarvis
//       </button>

//       {/* Navigation Links */}
//       <nav className="flex-1 space-y-2">
//         {links.map((link) => (
//           <NavLink
//             key={link.to}
//             to={link.to}
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
//                 isActive
//                   ? "bg-gray-800 text-white"
//                   : "text-gray-300 hover:bg-gray-800"
//               }`
//             }
//           >
//             {link.icon}
//             <span>{link.label}</span>
//           </NavLink>
//         ))}
//       </nav>

//       {/* Logout Button */}
//       <button
//         onClick={() => {
//           logout();
//           navigate("/");
//         }}
//         className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition"
//       >
//         <LogOut className="w-5 h-5" />
//         <span>Logout</span>
//       </button>
//     </aside>
//   );
// }

import { Home, BookOpen, Settings, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const links = [
    { to: "/app", label: "Dashboard", icon: <Home className="w-5 h-5" /> },
    { to: "/knowledge", label: "Knowledge Base", icon: <BookOpen className="w-5 h-5" /> },
    { to: "/settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-600 to-indigo-400 text-white flex flex-col py-8 px-4 shadow-2xl">
      {/* Logo */}
      <button
        onClick={() => navigate("/")}
        className="text-2xl font-bold mb-12 px-3 text-left text-white hover:text-blue-100 transition"
      >
        Ellie.ai
      </button>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-white text-blue-600 shadow-lg font-semibold"
                  : "text-blue-100 hover:bg-blue-500 hover:text-white"
              }`
            }
          >
            {link.icon}
            <span className="font-medium">{link.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-blue-100 hover:bg-red-500 hover:text-white transition-all group"
      >
        <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="font-medium">Logout</span>
      </button>
    </aside>
  );
}