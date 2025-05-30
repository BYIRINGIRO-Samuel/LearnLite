import React, { useRef } from "react";

interface EnterOTPProps {
  onBack: () => void;
  email?: string;
  onOTPVerified: () => void;
}

const EnterOTP: React.FC<EnterOTPProps> = ({
  onBack,
  email = "your email",
  onOTPVerified,
}) => {
  const inputs = Array.from({ length: 6 }, () =>
    useRef<HTMLInputElement>(null)
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const value = e.target.value;
    if (value.length === 1 && idx < 5) {
      inputs[idx + 1].current?.focus();
    }
    if (value.length === 0 && idx > 0) {
      inputs[idx - 1].current?.focus();
    }
  };

  // Placeholder for OTP verification logic
  const handleVerifyOTP = () => {
    // In a real application, you would verify the entered OTP here.
    // If verification is successful, call onOTPVerified.
    onOTPVerified();
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-[80vh] p-4 relative">
      <button
        onClick={onBack}
        className="absolute left-4 top-4 md:left-0 md:top-0 focus:outline-none"
      >
        <img src="/assets/icons/back.svg" alt="Back" className="w-7 h-7" />
      </button>
      <h2 className="text-2xl font-bold mb-2 text-[#1DA1F2] mt-8">
        Reset Password
      </h2>
      <p className="text-gray-600 text-center mb-10">
        Please enter the password reset code below that was sent to{" "}
        <span className="font-semibold">{email}</span>.
      </p>
      <div className="flex gap-2 mb-6">
        {inputs.map((ref, idx) => (
          <input
            key={idx}
            ref={ref}
            type="text"
            maxLength={1}
            className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl focus:outline-none focus:border-[#1DA1F2]"
            onChange={(e) => handleInput(e, idx)}
          />
        ))}
      </div>
      <button
        className="w-full py-3 rounded-lg bg-[#1DA1F2] text-white font-semibold text-lg mb-4 hover:bg-[#1991DA] transition"
        onClick={handleVerifyOTP}
      >
        Reset Password
      </button>
      <div className="flex items-center w-full mb-4">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="mx-2 text-gray-400 text-sm">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <button className="py-3 flex items-center justify-center gap-2 border border-gray-200 bg-gray-300 rounded-[10px]  hover:bg-gray-400 transition w-full">
        <img src="/assets/icons/google.svg" alt="google" className="w-7 h-7" />
        Google
      </button>
    </div>
  );
};

export default EnterOTP;
