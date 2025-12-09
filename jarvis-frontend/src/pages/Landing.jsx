
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { Brain, Zap, Shield, Clock, BookOpen, TrendingUp } from "lucide-react";

export default function Landing() {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 shadow-sm bg-white sticky top-0 z-50 border-b">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Jarvis
        </h1>
        <div className="flex gap-4">
          {!user ? (
            <>
              <Link to="/login">
                <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                  Login
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Get Started
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/app">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Go to Dashboard
                </Button>
              </Link>
              <Button onClick={logout} variant="ghost" className="text-gray-700 hover:text-red-600">
                Logout
              </Button>
            </>
          )}
        </div>
      </nav>

      {/* Hero */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-white"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-6 p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-lg"
        >
          <Brain className="w-16 h-16 text-blue-600" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          Your AI-Powered
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Workday Assistant
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10"
        >
          Get instant answers to Workday questions with conversational AI that understands your
          company's documentation, SOPs, and policies.
        </motion.p>

        {!user && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4"
          >
            <Link to="/login">
              <Button size="lg" className="px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all">
                Get Started Free
              </Button>
            </Link>
            <a
              href="#features"
              className="px-8 py-6 text-lg rounded-lg border-2 border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 transition-all flex items-center justify-center font-medium"
            >
              See How It Works
            </a>
          </motion.div>
        )}
      </motion.header>

      {/* Features */}
      <section id="features" className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Why Teams Choose Jarvis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stop searching through documentation. Get instant, accurate answers to your Workday questions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="Instant Answers"
              desc="Ask questions in plain English and get step-by-step guidance immediately. No more digging through documentation or waiting for HR responses."
            />
            <FeatureCard
              icon={<Brain className="w-10 h-10" />}
              title="Smart Context Understanding"
              desc="Jarvis understands your company's Workday setup, SOPs, and policies. Answers are tailored to your organization's specific configuration."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Secure & Private"
              desc="Enterprise-grade security with tenant isolation. Your data stays private and is never shared across organizations."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10" />}
              title="Save Hours Every Week"
              desc="Reduce repetitive HR inquiries by 70%. Employees get instant self-service answers while HR focuses on strategic work."
            />
            <FeatureCard
              icon={<BookOpen className="w-10 h-10" />}
              title="Always Up-to-Date"
              desc="Automatically syncs with your latest documentation and policy updates. No manual maintenance required."
            />
            <FeatureCard
              icon={<TrendingUp className="w-10 h-10" />}
              title="Continuously Learning"
              desc="Built on cutting-edge AI that adapts to your organization's evolving needs and gets smarter over time."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-32 text-center bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Workday Experience?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join companies that are saving 20+ hours per week on Workday support.
          </p>

  <Link to={user ? "/app" : "/login"}>
  <Button
    size="lg"
    className="
      px-10 py-6 text-lg font-semibold
      bg-white text-gray-900
      shadow-xl hover:shadow-blue-400/40
      hover:bg-blue-50 hover:scale-[1.04]
      rounded-xl
      transition-all duration-200
    "
  >
    {user ? "Go to Dashboard" : "Start Using Jarvis Today"}
  </Button>
</Link>
        </div>
      </motion.footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200 group"
    >
      <div className="mb-6 text-blue-600 bg-gradient-to-br from-blue-50 to-indigo-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
    </motion.div>
  );
}