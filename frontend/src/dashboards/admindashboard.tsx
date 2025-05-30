//import Bottombar from '../components/Bottombar';
import { useEffect, useState } from 'react';
import AdminLeftsidebar from '../components/adminleftsidebar';
import AdminTopbar from '../components/AdminTopbar';
import AdminHome from '../components/AdminHome';

interface User {
  name: string;
  email: string;
  role: {
    type: string;
  };
}

const Dashboard = () => {
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
      <div className="hidden md:flex flex-shrink-0 overflow-y-auto hide-scrollbar">
        <AdminLeftsidebar />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminTopbar userName={user?.name || ''} />
        <div className="border-b border-gray-200"></div>
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 hide-scrollbar">
            <AdminHome />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
