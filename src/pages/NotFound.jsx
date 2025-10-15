import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="pt-16 pb-16 mt-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-5xl font-bold text-black mb-4">404</h1>
      <p className="text-xl text-gray-600">Page Not Found</p>
      <Link
        to="/"
        className="mt-4 inline-block px-6 py-2 border border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all"
      >
        Go Home
      </Link>
    </div>
  );
}
