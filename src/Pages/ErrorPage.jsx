
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-100 flex flex-col justify-center items-center text-center p-6 animate-fadeIn">
      <h1 className="text-7xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mb-6">
        Sorry, the page you're looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
