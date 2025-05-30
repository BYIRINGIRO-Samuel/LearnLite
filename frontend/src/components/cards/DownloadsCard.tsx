import { useState } from "react";
interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  uploadDate: string;
  views: number;
}
interface Note {
  id: string;
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  uploadDate: string;
  downloads: number;
}
const DownloadsCard = () => {
  const [videos] = useState<Video[]>([
    {
      id: "1",
      title: "Introduction to Mathematics",
      description: "Basic concepts of algebra and calculus",
      thumbnail: "/assets/images/img1.jpg",
      duration: "45:30",
      uploadDate: "2024-03-15",
      views: 1234,
    },
    {
      id: "2",
      title: "Physics Fundamentals",
      description: "Understanding Newton's laws and motion",
      thumbnail: "/assets/images/img2.jpg",
      duration: "38:15",
      uploadDate: "2024-03-14",
      views: 856,
    },
    {
      id: "3",
      title: "Chemistry Basics",
      description: "Introduction to atomic structure",
      thumbnail: "/assets/images/img3.jpg",
      duration: "52:45",
      uploadDate: "2024-03-13",
      views: 1567,
    },
  ]);
  const [notes] = useState<Note[]>([
    {
      id: "1",
      title: "Mathematics Formulas",
      description: "Complete collection of algebra and calculus formulas",
      fileType: "PDF",
      fileSize: "2.4 MB",
      uploadDate: "2024-03-15",
      downloads: 234,
    },
    {
      id: "2",
      title: "Physics Laws Summary",
      description:
        "Comprehensive summary of Newton's laws and motion principles",
      fileType: "DOCX",
      fileSize: "1.8 MB",
      uploadDate: "2024-03-14",
      downloads: 156,
    },
    {
      id: "3",
      title: "Chemistry Periodic Table",
      description: "Detailed periodic table with element properties",
      fileType: "PDF",
      fileSize: "3.2 MB",
      uploadDate: "2024-03-13",
      downloads: 289,
    },
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="flex-1 p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
          <div className="flex flex-col flex-grow">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 flex-wrap">
              <p className="text-white bg-blue-600 px-2 py-[5px] rounded-[8px] cursor-pointer font-bold">
                All Courses
              </p>
              <p className="text-gray-500 cursor-pointer py-[5px] font-bold">
                Mathemics
              </p>
              <p className="text-gray-500 cursor-pointer py-[5px] font-bold">
                Physics
              </p>
              <p className="text-gray-500 cursor-pointer py-[5px] font-bold">
                Chemistry
              </p>
              <p className="text-gray-500 cursor-pointer py-[5px] font-bold">
                Programming
              </p>
              <p className="text-gray-500 cursor-pointer py-[5px] font-bold">
                Arts&Design
              </p>
            </div>
            <h1 className="text-2xl font-bold mb-4 mt-10">Downloaded Videos</h1>
          </div>
          <div className="relative flex-shrink-0">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-[8px] font-semibold flex items-center gap-2"
              onClick={toggleDropdown}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l4 4v1h-16v-1l4-4a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                ></path>
              </svg>
              Filter by class
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-blue-600 rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
                    >
                      s1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
                    >
                      s2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
                    >
                      s3
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative bg-gray-400/20 rounded-xl border border-gray-200 shadow-sm  hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-video group">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white/90 p-4 rounded-full hover:bg-white transition-colors">
                  <img
                    src="/assets/icons/play.svg"
                    alt="Play"
                    className="w-8 h-8"
                  />
                </button>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                {video.duration}
              </div>
            </div>
            <div className="p-4 relative">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-lg line-clamp-1 flex-1">
                  {video.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-1 line-clamp-2">
                {video.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>{video.views.toLocaleString()} views</span>
                  <span className="mx-1">•</span>
                  <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-bold mb-4 mt-10">Downloaded Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-visible hover:shadow-md transition-shadow relative cursor-pointer"
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg line-clamp-1">
                      {note.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {note.fileType} • {note.fileSize}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {note.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>{note.downloads.toLocaleString()} downloads</span>
                  <span className="mx-1">•</span>
                  <span>{new Date(note.uploadDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DownloadsCard;
