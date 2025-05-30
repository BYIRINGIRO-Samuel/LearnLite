import { useState, useEffect, useRef } from 'react';
import ProfileDropdown from './ProfileDropdown';
import Rightsidebar from './Rightsidebar';

interface TopbarProps {
  userName: string;
}

const Topbar: React.FC<TopbarProps> = ({ userName }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [firstName, setFirstName] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (userName) {
      const names = userName.split(' ');
      setFirstName(names[0]);
    }
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setProfilePicture(user.profilePicture || undefined);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    }
  }, [userName]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col w-full sticky top-0 z-50">
      <div className="flex items-center justify-between px-8 py-4 border-b bg-white">
        <div className="flex-1 max-w-md">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Try search a course"
              className="w-full pl-10 pr-4 py-2 rounded-[10px] bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
            />
            <img
              src="/assets/icons/search.svg"
              alt="search"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 w-4 h-4 text-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-6 ml-6">
          <button 
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
            onClick={toggleRightSidebar}
          >
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></span>
          </button>

          <div className="relative" ref={dropdownRef}>
            <div
              className="cursor-pointer flex items-center gap-2"
              onClick={toggleDropdown}
            >
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <img
                  src="/assets/images/notfound.jpg"
                  alt="Default User Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              
              <span className="font-medium text-gray-700 text-sm">{firstName}</span>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {isDropdownOpen && <ProfileDropdown onClose={closeDropdown} />}
          </div>
        </div>
      </div>

      {isRightSidebarOpen && (
        <>
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 overflow-y-auto hide-scrollbar">
            <Rightsidebar onClose={toggleRightSidebar} />
          </div>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleRightSidebar}
          />
        </>
      )}
    </div>
  );
};

export default Topbar;
