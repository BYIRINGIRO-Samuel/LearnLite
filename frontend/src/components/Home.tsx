import { useEffect, useState } from 'react';
import OverviewCards from "./cards/OverviewCards";
import PopularCourse from "./cards/PopularCourse";
import MyCourse from "./MyCourse";

interface User {
  name: string;
  email: string;
  role: {
    type: string;
  };
}

const Home = () => {
  const [firstName, setFirstName] = useState<string>('');

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const userData: User = JSON.parse(userStr);
        // Extract first name
        if (userData.name) {
          const names = userData.name.split(' ');
          setFirstName(names[0]);
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  return (
    <div>
      <p className="text-3xl text-blue-400 font-bold mt-4 mb-6 px-4">Welcome <span className="text-green-700">{firstName}👏</span></p>
      <div className="w-full py-6 px-4 bg-gray-50 rounded-lg shadow-sm flex flex-col">
        <h1 className="text-2xl text-gray-800 font-bold mb-4">Overview</h1>
        <OverviewCards />
        <h2 className="text-2xl text-gray-800 font-bold mb-4 mt-6">Popular Course</h2>
        <PopularCourse/>
        <h2 className="text-2xl text-gray-800 font-bold mb-4 mt-6">My Course</h2>
        <MyCourse />
      </div>
    </div>
  );
};

export default Home;
