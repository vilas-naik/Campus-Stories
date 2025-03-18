import { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function FeaturesPage() {
  const ctaRef = useRef(null);

  const features = [
    {
      title: "Create Your Unique Profile",
      description: "Upload your ID and stunning photos to craft a personalized campus profile. Add a bio, preferences, and academic details to shine.",
      icon: "👤",
    },
    {
      title: "Swipe to Connect",
      description: "Discover like-minded students with our intuitive swipe system. Find study buddies, friends, or more in just seconds!",
      icon: "💞",
    },
    {
      title: "Engage with Your Community",
      description: "Join campus events, share stories, and interact with a vibrant community tailored to your interests and passions.",
      icon: "🌐",
    },
    {
      title: "Secure & Verified Matches",
      description: "Enjoy peace of mind with ID-based verification and secure connections, ensuring a safe and trusted campus experience.",
      icon: "🔒",
    },
    {
      title: "Real-Time Event Updates",
      description: "Stay in the loop with live updates on campus events, workshops, and social gatherings—all in one place.",
      icon: "📅",
    },
    {
      title: "Personalized Recommendations",
      description: "Get tailored match suggestions based on your preferences, making every connection feel meaningful and relevant.",
      icon: "⭐",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      quote: "CAMPUS STORIES helped me find my study group in just a week—amazing platform!",
      image: "https://via.placeholder.com/100?text=Priya",
    },
    {
      name: "Amit Patel",
      quote: "The swipe feature is so fun, and I’ve made great friends already!",
      image: "https://via.placeholder.com/100?text=Amit",
    },
    {
      name: "Sneha Rao",
      quote: "Secure and easy to use—perfect for connecting on campus!",
      image: "https://via.placeholder.com/100?text=Sneha",
    },
  ];

  const stats = [
    { label: "Students Connected", value: "10K+" },
    { label: "Campus Events", value: "500+" },
    { label: "Verified Profiles", value: "8K+" },
  ];

  return (
    <div className="min-h-screen font-[Poppins, sans-serif] bg-gradient-to-b from-yellow-400 to-yellow-200 text-gray-900 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1500x800')] bg-cover bg-center opacity-5"></div>
      <Header />
      <main className="relative z-10 flex flex-col items-center justify-start min-h-[calc(100vh-200px)] p-6 pt-32">
        {/* Hero Banner */}
        <section className="w-full max-w-6xl text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Discover <span className="text-purple-600">CAMPUS STORIES</span> Features
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Connect, engage, and thrive with innovative tools designed for students.
          </p>
          <button className="px-8 py-4 bg-pink-500 text-white font-semibold rounded-xl hover:bg-pink-600 transition-all duration-300 shadow-md hover:shadow-lg">
            Get Started
          </button>
        </section>

        {/* Stats Section
        <section className="w-full max-w-6xl mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-xl shadow-lg">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* Features Section */}
        <section className="w-full max-w-6xl mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose CAMPUS STORIES?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 text-pink-500">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full max-w-6xl mb-20 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">Hear from Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center transition-all duration-300 hover:shadow-lg"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-pink-500"
                />
                <p className="text-gray-600 italic mb-3">{`"${testimonial.quote}"`}</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        {/* <section ref={ctaRef} className="w-full max-w-4xl text-center mb-20 bg-gradient-to-r from-pink-100 to-purple-100 p-10 rounded-xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Connect?</h2>
          <p className="text-xl text-gray-700 mb-6">
            Join thousands of students and start building your campus story today!
          </p>
          <button className="px-10 py-4 bg-pink-500 text-white font-semibold rounded-xl hover:bg-pink-600 transition-all duration-300 shadow-md hover:shadow-lg">
            Sign Up Now
          </button>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}