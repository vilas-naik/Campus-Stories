import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function AtomicLanding() {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gradient-to-b from-pink-500 via-purple-500 to-red-500 min-h-screen text-white font-sans">
      <button onClick={() => navigate('/auth')}>Get Started</button>

      {/* Features Section */}
      <section className="py-20 px-8 bg-white text-black">
        <h2 className="text-3xl font-bold text-center fade-in">Why Choose Atomic?</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <div className="max-w-sm p-6 bg-pink-100 rounded-lg shadow-md fade-in">
            <h3 className="text-xl font-semibold">Effortless Matches</h3>
            <p className="mt-2">Swipe and match with like-minded people in your area.</p>
          </div>
          <div className="max-w-sm p-6 bg-purple-100 rounded-lg shadow-md fade-in">
            <h3 className="text-xl font-semibold">Authentic Connections</h3>
            <p className="mt-2">Designed to prioritize meaningful conversations.</p>
          </div>
          <div className="max-w-sm p-6 bg-red-100 rounded-lg shadow-md fade-in">
            <h3 className="text-xl font-semibold">Privacy First</h3>
            <p className="mt-2">Your data is secure and your profile stays under your control.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
