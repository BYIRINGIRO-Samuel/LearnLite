import { useEffect, useState } from 'react';
import Home1 from '../components/Home1'
import Teacherleftsidebar from '../components/teacherleftsidebar';
import TrTopbar from '../components/TrTopbar';

interface User {
  name: string;
  email: string;
  role: {
    type: string;
  };
}

const Teacherdashboard = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const userData = JSON.parse(userStr);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="md:w-72 md:flex-shrink-0 w-0 overflow-y-auto hide-scrollbar">
        <Teacherleftsidebar />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <TrTopbar userName={user?.name || ''} />
        <div className="border-b border-gray-200"></div>
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 hide-scrollbar">
            <Home1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacherdashboard;
