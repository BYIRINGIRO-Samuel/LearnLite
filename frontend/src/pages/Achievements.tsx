import Leftsidebar from "../components/Leftsidebar";
import Topbar from "../components/Topbar";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title as ChartTitle, Tooltip, Legend, ArcElement } from 'chart.js';
import 'react-calendar/dist/Calendar.css';
import AchievementsCards from "../components/cards/AchievementsCards";
import Graph from "../components/Graphs/Graph";
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartTitle, Tooltip, Legend, ArcElement);

const Achievements = () => {
  interface User {
    name: string;
    email: string;
    role: {
      type: string;
    };
  }

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
    <div className="flex h-screen w-full overflow-y-auto">
      <div className="hidden md:flex flex-shrink-0 overflow-y-auto hide-scrollbar">
        <Leftsidebar />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar userName={user?.name || ''}/>
        <div className="border-b border-gray-200"></div>
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 hide-scrollbar bg-gray-50">
            <AchievementsCards/>
            <Graph/>            
          </div>
        </div>
      </div>
      {/* <div className="flex">
        <Bottombar/>
      </div> */}
    </div>
  );
};

export default Achievements;
