import loading from "../assets/images/loading.gif";
import logo from "../assets/images/logo.png";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md mx-auto">
        {/* Logo + Spinner Side-by-Side */}
        <div className="flex items-center justify-center gap-6 animate-fade-in-up">
          {/* Logo */}
          <img
            src={logo}
            alt="Hexashop"
            className="h-16 w-auto opacity-90"
          />

          {/* Elegant Spinner */}
          <div className="relative">
            {/* Outer Ring */}
            <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin-slow"></div>
            {/* Inner Spinner */}
            <div className="absolute inset-2 w-12 h-12 border-4 border-t-black border-b-transparent rounded-full animate-spin-fast"></div>
            {/* Center Dot */}
            <div className="absolute inset-5 w-6 h-6 bg-black rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Alternative GIF (hidden backup) */}
        <img
          src={loading}
          alt="Loading..."
          className="w-12 h-12 mx-auto hidden"
        />

        {/* Progress Text */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-black animate-pulse">
            Loading Collection...
          </p>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>

        {/* Subtle Stats */}
        <div
          className="flex justify-center space-x-8 text-xs text-gray-500 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <span>12.5k Products</span>
          <span>•</span>
          <span>50k+ Customers</span>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-fast {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
        .animate-spin-fast {
          animation: spin-fast 0.8s linear infinite;
        }
      `}</style>
    </div>
  );
}
