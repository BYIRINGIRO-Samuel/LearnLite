import React, { useState } from 'react';


interface NewPasswordProps {
  onBackToLogin: () => void;
}

const NewPassword: React.FC<NewPasswordProps> = ({ onBackToLogin }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('New Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // You would typically call an API here
    // onSubmit(password);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 relative">
      <button
        onClick={onBackToLogin}
        className="absolute left-4 top-4 md:left-0 md:top-0 focus:outline-none"
      >
        <img src="/assets/icons/back.svg" alt="Back" className="w-7 h-7" />
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Set new password</h2>
      <p className="text-gray-500 text-sm text-center mb-6">Must be at least 8 characters</p>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="w-full mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full px-4 py-2 border border-gray-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#A8D8F8] pr-10"
            required
            minLength={8}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 mt-3.5"
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </button>
        </div>

        <div className="w-full mb-6 relative">
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="w-full px-4 py-2 border border-gray-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#A8D8F8] pr-10"
            required
            minLength={8}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 mt-3.5"
            onClick={() => setShowConfirmPassword((v) => !v)}
            tabIndex={-1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-[10px] bg-[#1DA1F2] text-white font-semibold text-lg hover:bg-[#1991DA] transition mb-6"
        >
          Reset password
        </button>
      </form>

      <button
        onClick={onBackToLogin}
        className="flex items-center text-[#1DA1F2] hover:underline"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        Back to log in
      </button>
    </div>
  );
};

export default NewPassword;
