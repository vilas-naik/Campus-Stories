import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import supabase from "../../utils/supabase.js";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 text-gray-800 p-6">
      <div ref={formRef} className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full">
        <h2 ref={title} className="text-2xl font-bold text-pink-600 text-center">
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </h2>
        <form className="mt-6 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:ring-pink-400 focus:outline-none"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-pink-400 focus:outline-none"
          />
          {isSignUp && (
            <input
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border rounded-lg focus:ring-pink-400 focus:outline-none"
            />
          )}
          <button
            ref={button}
            onClick={handleAuth}
            type="submit"
            className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-pink-500 font-semibold hover:underline ml-1">
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
