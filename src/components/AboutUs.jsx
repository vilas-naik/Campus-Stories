import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  useEffect(() => {
    // Hero animation
    gsap.from(".hero-content", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    });
    gsap.to(".hero-content", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      });

    // Team, mission, and features animations
    // gsap.from(".team-card, .mission-item, .feature-card", {
    //   opacity: 0,
    //   y: 30,
    //   duration: 0.8,
    //   stagger: 0.2,
    //   scrollTrigger: {
    //     trigger: ".content-section",
    //     start: "top 80%",
    //   },
    // });
    // gsap.to(".team-card, .mission-item, .feature-card", {
    //     opacity: 1,
    //     y: 0,
    //     duration: 0.8,
    //     stagger: 0.2,
    //     scrollTrigger: {
    //       trigger: ".content-section",
    //       start: "top 80%",
    //     },
    //   });
  }, []);

  return (
    <div className="min-h-screen font-[Poppins, sans-serif] bg-yellow-400 text-gray-900 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1500x800')] bg-cover bg-center opacity-10"></div>
      <Header />
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="relative z-10 text-center px-6 md:px-12 lg:px-20">
          <h1 className="hero-content text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            About <span className="text-purple-600">CAMPUS STORIES</span>
          </h1>
          <p className="hero-content text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We’re here to ignite meaningful connections with a fresh, modern twist. Discover the story behind our mission to revolutionize how you connect.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="content-section py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Mission */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="mission-item p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-purple-500 transition-all duration-300 group">
                <h3 className="text-2xl font-semibold text-purple-600 mb-4">Authentic Connections</h3>
                <p className="text-gray-600">We’re dedicated to creating a space where real conversations thrive, free from the noise.</p>
              </div>
              <div className="mission-item p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-pink-500 transition-all duration-300 group">
                <h3 className="text-2xl font-semibold text-pink-600 mb-4">Empowering You</h3>
                <p className="text-gray-600">Our tools put you in control, ensuring your experience is safe and personalized.</p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="team-card p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-yellow-500 transition-all duration-300 group text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img src="https://via.placeholder.com/128?text=Team+Member+1" alt="Team Member 1" className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-yellow-600">Darshan & Yuvaraj</h3>
                <p className="text-gray-600">Founder & Visionary</p>
              </div>
              <div className="team-card p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-purple-500 transition-all duration-300 group text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img src="https://avatars.githubusercontent.com/u/142196359?s=400&u=2e6dfc1a7528c59fa9f69307c2d79053c3b8f3d7&v=4" alt="Team Member 2" className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-purple-600">Nikhil R Nambiar</h3>
                <p className="text-gray-600">Lead Designer</p>
              </div>
              <div className="team-card p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-pink-500 transition-all duration-300 group text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img src="https://via.placeholder.com/128?text=Team+Member+3" alt="Team Member 3" className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-pink-600">Vilas R Naik</h3>
                <p className="text-gray-600">Tech Innovator</p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-16 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
              <div className="feature-card p-6">
                <h3 className="text-2xl font-semibold mb-4">Detailed Profiles</h3>
                <p className="text-gray-300">
                  Go ahead, be picky. CAMPUS STORIES profiles encourage you to share your religion, education, and day-to-day life so we can introduce you to the best people for you.
                </p>
              </div>
              <div className="feature-card p-6">
                <h3 className="text-2xl font-semibold mb-4">Proven Prompts</h3>
                <p className="text-gray-300">
                  Answer three prompts to activate your profile, and switch them up any time. We review our prompts and keep the ones that are most likely to get you out on a date.
                </p>
              </div>
              <div className="feature-card p-6">
                <h3 className="text-2xl font-semibold mb-4">Conversation Starters</h3>
                <p className="text-gray-300">
                  Research found that liking specific pictures or prompts leads to better matches and more dates than liking a profile in general. So now users must like a specific part of a CAMPUS STORIES profile—they can even add a comment to their like to kickstart a conversation.
                </p>
              </div>
              <div className="feature-card p-6">
                <h3 className="text-2xl font-semibold mb-4">Matchmaking Algorithm</h3>
                <p className="text-gray-300">
                  CAMPUS STORIES uses a Nobel Prize-winning algorithm that finds you go better quality dates, not just more dates. You’re eight times more likely to have a great date with your Most Compatible suggestions, aka the people you’re most likely to have mutual chemistry with.
                </p>
              </div>
              <div className="feature-card p-6">
                <h3 className="text-2xl font-semibold mb-4">Meaningful Likes</h3>
                <p className="text-gray-300">
                  Research has shown us that eight is the magic number. When our members had more free likes per day, their matches were worse. When they had fewer, they were paying to send more. So now everyone gets eight for free.
                </p>
              </div>
              <div className="feature-card p-6">
                <h3 className="text-2xl font-semibold mb-4">Transparent Likes</h3>
                <p className="text-gray-300">
                  No anonymous likes—we show you who has liked you, so you don’t miss out on a potential match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}