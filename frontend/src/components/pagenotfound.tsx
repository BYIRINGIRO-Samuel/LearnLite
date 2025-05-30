import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center">
      
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/images/notfound.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-4xl font-semibold text-white mb-6">Oops! Page Not Found</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-md mx-auto">
          The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <button
          onClick={() => navigate('/studentdashboard')}
          className="px-8 py-3 bg-blue-500 text-white rounded-full text-lg font-medium hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
