import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import supabase from "../../utils/supabase.js";
import Header from "./Header.jsx";

export default function AuthPage() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const formRef = useRef(null);
  const title = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    gsap.fromTo(formRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2, ease: "power2.out" });
  }, [isSignUp]);

  const handleAuth = async () => {
    if (isSignUp) {
      if (password !== confirm) {
        alert("Passwords do not match!");
        return;
      }
  
      const { error } = await supabase.auth.signUp({ email: userName, password });
  
      if (error) {
        alert("Error signing up: " + error.message);
      } else {
        alert("Sign up successful! Check your email to verify your account.");
        setIsSignUp(false);
      }
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({ email: userName, password });
  
      if (error) {
        alert("Login failed: " + error.message);
      } else {
        // Store session
        localStorage.setItem("session", JSON.stringify(data.session));
  
        // Check if the user has a profile
        const { data: profileData, error: profileError } = await supabase
          .from("profile")
          .select("*")
          .eq("email", userName)
          .single();
  
        if (profileError || !profileData) {
          navigate("/profileCreate"); // Navigate to profile creation page if no profile exists
        } else {
          navigate("/profile"); // Navigate to profile page if profile exists
        }
      }
    }
  };
  

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-400 text-gray-900 p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1500x800')] bg-cover bg-center opacity-10"></div>
      <div ref={formRef} className="relative z-10 bg-white shadow-2xl rounded-2xl p-8 max-w-md h-auto mt-[3em] w-full border border-gray-200">
        <h2 ref={title} className="text-3xl font-bold text-purple-600 text-center mb-6">
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </h2>
        <form className="mt-6 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full p-4 border rounded-xl focus:ring-purple-400 focus:outline-none bg-gray-50 text-gray-800 placeholder-gray-500"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full p-4 border rounded-xl focus:ring-purple-400 focus:outline-none bg-gray-50 text-gray-800 placeholder-gray-500"
          />
          {isSignUp && (
            <input
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              className="w-full p-4 border rounded-xl focus:ring-purple-400 focus:outline-none bg-gray-50 text-gray-800 placeholder-gray-500"
            />
          )}
          <button
            ref={button}
            onClick={handleAuth}
            type="submit"
            className="w-full py-3 bg-gray-900 text-yellow-400 font-semibold rounded-xl hover:bg-gray-800 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-purple-600 font-semibold hover:underline ml-1">
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
    </div>
    
  );
}