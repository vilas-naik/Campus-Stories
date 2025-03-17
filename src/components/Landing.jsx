import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AtomicLanding() {
  useEffect(() => {
    gsap.from(".fade-in", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
    gsap.to(".fade-in", { opacity: 1, y: 0, duration: 2, stagger: 0.3 });

    gsap.from(".swipe-effect", {
      x: "100%",
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
    gsap.to(".swipe-effect", {
      x: 0,
      opacity: 1,
      duration: 3,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-pink-500 via-purple-500 to-red-500 min-h-screen text-white font-sans">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center h-screen text-center p-8">
        <h1 className="text-5xl font-bold fade-in">Welcome to Atomic</h1>
        <p className="text-lg mt-4 fade-in max-w-md">
          The dating app designed to be deleted. Find meaningful connections effortlessly.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-pink-500 font-semibold rounded-full shadow-lg fade-in hover:scale-105 transition">
          Get Started
        </button>
      </header>

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
