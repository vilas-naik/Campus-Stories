import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import supabase from "../../utils/supabase.js";

export default function AuthPage() {
  const navigate = useNavigate();

  // States
  const [isSignUp, setIsSignUp] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  // Refs
  const formRef = useRef(null);
  const title = useRef(null);
  const input = useRef(null);
  const button = useRef(null);
  const already = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out", stagger: 0.2 }
    );
  }, [isSignUp]);

  useEffect(() => {
    const tl = gsap.timeline({ ease: "power2.out" });

    tl.fromTo(title.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2 })
      .fromTo(input.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2 }, "-=1.5")
      .fromTo(button.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2 }, "-=1.5");
  }, []);

  const handleAuth = async () => {
    if (isSignUp) {
      if (password !== confirm) {
        alert("Passwords do not match!");
        return;
      }

      const { data: existingUser, error: userCheckError } = await supabase
        .from("users")
        .select("username")
        .eq("username", userName)
        .single();

      if (existingUser) {
        alert("Username already exists. Please choose another.");
        return;
      }

      const { data, error } = await supabase.from("users").insert([
        { username: userName, password: password }
      ]);

      if (error) {
        alert("Error signing up: " + error.message);
      } else {
        alert("Sign up successful! You can now log in.");
        setIsSignUp(false);
      }
    } else {
      const { data: user, error } = await supabase
        .from("users")
        .select("username, password")
        .eq("username", userName)
        .single();

      if (!user) {
        alert("User not found!");
      } else if (user.password !== password) {
        alert("Incorrect password!");
      } else {
        alert("Login successful!");
        navigate("/profile"); 
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
            ref={input}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Username"
            className="w-full p-3 border rounded-lg focus:ring-pink-400 focus:outline-none"
          />
          <input
            ref={input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-pink-400 focus:outline-none"
          />
          {isSignUp && (
            <input
              ref={input}
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
        <p className="text-center text-gray-600 mt-4" ref={already}>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-pink-500 font-semibold hover:underline ml-1"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
