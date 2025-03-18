import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    // Simple fade-in animation for the footer
    const footer = document.querySelector(".footer");
    if (footer) {
      footer.style.opacity = "0";
      setTimeout(() => {
        footer.style.transition = "opacity 0.8s ease-in";
        footer.style.opacity = "1";
      }, 100);
    }
  }, []);

  return (
    <footer className="footer bg-gray-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h3 className="text-3xl font-bold text-yellow-400 mb-4">CAMPUS STORIES</h3>
          <p className="text-gray-400 text-sm">
            © 2025 Campus Stories Inc. | All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-300">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482A13.987 13.987 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-300">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.233.298 2.771.634.573.334 1.025.767 1.492 1.234.467.467.9.919 1.234 1.492.336.538.572 1.405.634 2.771.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.298 2.233-.634 2.771-.334.573-.767 1.025-1.234 1.492-.467.467-.919.9-1.492 1.234-.538.336-1.405.572-2.771.634-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.233-.298-2.771-.634-.573-.334-1.025-.767-1.492-1.234-.467-.467-.9-.919-1.234-1.492-.336-.538-.572-1.405-.634-2.771-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.298-2.233.634-2.771.334-.573.767-1.025 1.234-1.492.467-.467.919-.9 1.492-1.234.538-.336 1.405-.572 2.771-.634 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.014-4.95.072-1.315.064-2.192.282-2.974.619-.874.4-1.622.948-2.342 1.668-.72.72-1.268 1.468-1.668 2.342-.337.782-.555 1.659-.619 2.974-.058 1.28-.072 1.691-.072 4.95s.014 3.67.072 4.95c.064 1.315.282 2.192.619 2.974.4.874.948 1.622 1.668 2.342.72.72 1.468 1.268 2.342 1.668.782.337 1.659.555 2.974.619 1.28.058 1.691.072 4.95.072s3.67-.014 4.95-.072c1.315-.064 2.192-.282 2.974-.619.874-.4 1.622-.948 2.342-1.668.72-.72 1.268-1.468 1.668-2.342.337-.782.555-1.659.619-2.974.058-1.28.072-1.691.072-4.95s-.014-3.67-.072-4.95c-.064-1.315-.282-2.192-.619-2.974-.4-.874-.948-1.622-1.668-2.342-.72-.72-1.468-1.268-2.342-1.668-.782-.337-1.659-.555-2.974-.619-1.28-.058-1.691-.072-4.95-.072z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Index Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-4">Index</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-yellow-300">Mission</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-300">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-300">Labs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-300">Press</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-300">Success Stories</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-yellow-300">Safe Dating Tips</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-300">FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-300">Trust & Safety</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-yellow-300">Security</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-300">Terms</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-300">Privacy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-300">Cookie Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-300">Consumer Health Data Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-300">Your Privacy Choices</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-300">Colorado Safety Policy Information</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}