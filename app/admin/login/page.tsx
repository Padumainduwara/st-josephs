"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, User, Loader2, AlertCircle } from "lucide-react";
import { login } from "@/app/actions/auth";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Call the secure Server Action
      const result = await login(username, password);

      if (result.success) {
        router.push("/admin/events"); // Redirect to Dashboard
      } else {
        setError(result.message || "Authentication failed");
        setLoading(false);
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#800000] rounded-b-[50%] scale-150 -translate-y-1/2 opacity-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-gray-100"
      >
        <div className="bg-[#800000] p-6 text-center text-white relative">
          <div className="mx-auto bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-3">
             <ShieldCheck className="w-8 h-8 text-yellow-400" />
          </div>
          <h1 className="text-2xl font-bold tracking-wide font-serif">Admin Secure Portal</h1>
          <p className="text-red-200 text-sm mt-1">St. Joseph's Girls' School Nugegoda</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                className="bg-red-50 text-red-600 text-sm p-3 rounded-lg flex items-center gap-2 border border-red-100"
              >
                <AlertCircle className="w-4 h-4 shrink-0" /> {error}
              </motion.div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input 
                  type="text" 
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 h-12 bg-gray-50 border-gray-200 focus:bg-white focus:ring-[#800000] transition-colors"
                  placeholder="Enter admin username"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 bg-gray-50 border-gray-200 focus:bg-white focus:ring-[#800000] transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full h-12 bg-[#800000] hover:bg-[#600000] text-white font-bold text-base shadow-lg transition-all hover:shadow-xl rounded-xl"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Secure Login"}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}