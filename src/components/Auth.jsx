import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { gsap } from "gsap";

export default function AuthPage() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const formRef = useRef(null);
  const title = useRef(null);
  const input = useRef(null);
  const button = useRef(null);
  const already = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
    });
    gsap.to(formRef.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
      stagger:0.2
    });
  }, [isSignUp]);

  useEffect(() => {
    gsap.from(title.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
    });
    gsap.to(title.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
    });

    gsap.from(input.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
    });
    gsap.to(input.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
    });
    gsap.from(button.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
    });
    gsap.to(button.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
    });
  })

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 text-gray-800 p-6">
      <div ref={formRef} className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full">
        <h2 ref={title} className="text-2xl font-bold text-pink-600 text-center">
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </h2>
        <form className="mt-6 flex flex-col gap-4">
          <input ref={input}
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:ring-pink-400 focus:outline-none"
          />
          {isSignUp && (
            <input
            ref={input}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:ring-pink-400 focus:outline-none"
            />
          )}
          <button
          ref={button}
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
