import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6">

      <div className="text-center space-y-6 max-w-md">

        <h1 className="text-6xl md:text-7xl font-extrabold text-green-700">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 leading-relaxed">
          The livestock page you are looking for might have been removed,
          sold, or doesn’t exist anymore in our system.
        </p>

        <Link href="/">
          <button className="px-7 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition duration-300">
            Back to Home
          </button>
        </Link>

      </div>

    </div>
  );
}