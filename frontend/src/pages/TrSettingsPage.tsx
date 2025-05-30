import Leftsidebar from "../components/Leftsidebar";
import { useState } from "react";
import Theme from "../components/Theme";
import TrProfilePage from "../components/TrProfile";

const TrSettingsPage = () => {
  const [selectedSection, setSelectedSection] = useState("Account Settings");

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <div className="hidden md:flex">
        <Leftsidebar />
      </div>

      <div className="flex flex-1">
        <div className="w-1/3 border-r border-gray-200 bg-white">
          <h1 className="text-4xl ml-10 mt-10 font-bold mb-8 text-blue-900">
            Settings
          </h1>

          <div
            className={`flex gap-4 ml-5 mt-5 items-center cursor-pointer p-2 ${
              selectedSection === "Account Settings" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleSectionClick("Account Settings")}
          >
            <img src="/assets/icons/user.svg" alt="user" className="w-6 h-6" />
            <div className="flex flex-col gap-1">
              <p className="text-gray-900 font-bold text-[20px]">
                Account Settings
              </p>
              <p className="text-gray-600 font-semibold text-[15px]">
                Personal Informations, Email
              </p>
            </div>
          </div>

          <div
            className={`flex gap-4 ml-5 mt-5 items-center cursor-pointer p-2 ${
              selectedSection === "Appearances" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleSectionClick("Appearances")}
          >
            <img
              src="/assets/icons/color.svg"
              alt="appearances"
              className="w-6 h-6"
            />
            <div className="flex flex-col gap-1">
              <p className="text-gray-900 font-bold text-[20px]">Appearances</p>
              <p className="text-gray-600 font-semibold text-[15px]">
                Dark and Light mode
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-8 overflow-y-auto">
          {selectedSection === "Account Settings" && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">
                Account Settings
              </h2>
              <TrProfilePage />
            </div>
          )}
          {selectedSection === "Appearances" && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">
                Appearance
              </h2>
              <Theme />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrSettingsPage;
