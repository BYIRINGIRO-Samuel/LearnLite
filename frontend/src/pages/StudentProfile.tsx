import { useEffect, useState } from 'react';
import Leftsidebar from "../components/Leftsidebar"
import ProfilePage from "../components/Profile"
import Topbar from "../components/Topbar"

interface User {
  name: string;
  email: string;
  role: {
    type: string;
  };
}

const StudentProfile = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const userData: User = JSON.parse(userStr);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  return (
    <div className='flex h-screen w-full hide-scrollbar bg-gray-50'>
      <div className="hidden md:flex">
        <Leftsidebar/>
      </div>
      <div className="flex flex-col flex-1 overflow-x-hidden">
          <div className="sticky top-0 z-50">
          <Topbar userName={user?.name || ''} />
        </div>
        <ProfilePage/>
      </div>
    </div>
  )
}

export default StudentProfile
