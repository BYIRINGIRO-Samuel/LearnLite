import { useState } from 'react';

interface ResetPasswordProps {
  onBackToLogin: () => void;
  onResetPassword: (email: string) => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ onBackToLogin, onResetPassword}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onResetPassword(email);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 relative">
      <button
        onClick={onBackToLogin}
        className="absolute left-4 top-4 md:left-0 md:top-0 focus:outline-none"
      >
        <img src="/assets/icons/back.svg" alt="Back" className="w-7 h-7" />
      </button>
      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h.932a2.25 2.25 0 001.908-1.058l1.214-1.942M16.5 7.5l-3.811-.762a1.125 1.125 0 01-1.07-.745L11.35 2.36A2.25 2.25 0 009.214 1.5H4.5M16.5 7.5l1.891-.567a2.25 2.25 0 012.286 1.151L21.75 13.5v.008m-11.97-4.327a1.125 1.125 0 01-1.07-.745L6.35 2.36A2.25 2.25 0 004.214 1.5H4.5m-.75 3.75v14.07a3 3 0 003 3h11.25a3 3 0 003-3V5.25M12 10.5h.008v.008H12V10.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Forgot password?</h2>

      <p className="text-gray-500 text-center mb-6">No worries, we'll send you reset instructions.</p>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="w-full mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#A8D8F8]"
            required
          />
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

export default ResetPassword;
