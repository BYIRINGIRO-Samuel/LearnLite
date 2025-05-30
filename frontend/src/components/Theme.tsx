import { useState } from 'react';

const Theme = () => {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    // In a real application, you would also update the theme on the body/html element
    // or use a context/provider to manage theme across the app.
    console.log(`Switched to ${theme === 'light' ? 'dark' : 'light'} mode`);
  };

  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow">
      {/* Theme Selector */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Theme</h2>
        <div className="flex items-center gap-2">
          {/* Sun Icon (Light Mode) */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${theme === 'light' ? 'bg-yellow-400 text-white' : 'text-gray-500 hover:bg-gray-200'}`}
            aria-label="Switch to Light Mode"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>

          {/* Moon Icon (Dark Mode) */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${theme === 'dark' ? 'bg-blue-800 text-white' : 'text-gray-500 hover:bg-gray-200'}`}
            aria-label="Switch to Dark Mode"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Theme and Font Size Preview */}
      <div className={`p-6 rounded-lg ${theme === 'light' ? 'bg-gray-100 text-gray-800' : 'bg-[#3a3a5a] text-white'}`}>
        <h3 className="text-lg font-semibold mb-2">Preview</h3>
        <p className="text-base">
          This is a preview of the text with the selected theme and font size.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default Theme;
