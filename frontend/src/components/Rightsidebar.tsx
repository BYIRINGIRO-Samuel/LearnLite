import React from 'react';

interface RightsidebarProps {
  onClose: () => void;
}

const upcomingTests = [
  {
    id: 1,
    icon: '/assets/images/monster.jpg', 
    name: 'Basic Computer',
    details: 'Calss Test 5',
    date: '15 May',
  },
  {
    id: 2,
    icon: '/assets/images/marketing.jpg', 
    name: 'UIUX Design',
    details: 'Calss Test 2',
    date: '22 May',
  },
  {
    id: 3,
    icon: '/assets/images/ui.jpg',
    name: 'English Langauge',
    details: 'Calss Test 1',
    date: '24 May',
  },
  {
    id: 4,
    icon: '/assets/images/monster.jpg', 
    name: 'Time Management',
    details: 'Calss Test 3',
    date: '29 May',
  },
];

const continuingCourses = [
  {
    id: 1,
    icon: '/assets/images/marketing.jpg', 
    category: 'DESIGN',
    name: 'UI/UX Design',
    progressText: '12/16 Lessons',
    progressPercentage: 75,
  },
  {
    id: 2,
    icon: '/assets/images/ui.jpg', 
    category: 'CODE',
    name: 'Cyber Security',
    progressText: '20/30 Lessons',
    progressPercentage: 60,
  },
  {
    id: 3,
    icon: '/assets/images/monster.jpg',
    category: 'DATA',
    name: 'Learn Data Analyst',
    progressText: '8/20 Lessons',
    progressPercentage: 40,
  },
];

const Rightsidebar: React.FC<RightsidebarProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col w-64 p-4 bg-white rounded-lg shadow-md overflow-y-auto hide-scrollbar">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-4">Upcoming Tests</h3>
      <div className="flex flex-col gap-4 mb-8">
        {upcomingTests.map((test) => (
          <div key={test.id} className="flex items-center justify-between border-b border-gray-200 pb-3 last:border-b-0">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-md">
                <img src={test.icon} alt={test.name} className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">{test.name}</span>
                <span className="text-xs text-gray-500">{test.details} <span className="text-orange-500 font-medium">{test.date}</span></span>
              </div>
            </div>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full bg-gray-800 text-white py-2 rounded-md text-sm font-semibold hover:bg-gray-700 transition mb-8">
        See All Upcoming Tests
      </button>

      <h3 className="text-lg font-bold text-gray-800 mb-4">Continue Learning</h3>
      <div className="flex flex-col gap-4">
        {continuingCourses.map((course) => (
          <div key={course.id} className="flex items-center justify-between border-b border-gray-200 pb-3 last:border-b-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md overflow-hidden">
                 <img src={course.icon} alt={course.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-medium text-blue-600">{course.category}</span>
                <span className="text-sm font-medium text-gray-700">{course.name}</span>
                <span className="text-xs text-gray-500">{course.progressText}</span>
              </div>
            </div>
            
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs font-semibold text-gray-700">{course.progressPercentage}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rightsidebar;
