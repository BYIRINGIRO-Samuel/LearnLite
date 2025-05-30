import  { useState} from 'react';
import { toast } from "react-hot-toast";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  uploadDate: string;
  views: number;
}
const VideoSection = () => {
  const [videos] = useState<Video[]>([
    {
      id: '1',
      title: 'Introduction to Mathematics',
      description: 'Basic concepts of algebra and calculus',
      thumbnail: '/assets/images/img1.jpg',
      duration: '45:30',
      uploadDate: '2024-03-15',
      views: 1234
    },
    {
      id: '2',
      title: 'Physics Fundamentals',
      description: 'Understanding Newton\'s laws and motion',
      thumbnail: '/assets/images/img2.jpg',
      duration: '38:15',
      uploadDate: '2024-03-14',
      views: 856
    },
    {
      id: '3',
      title: 'Chemistry Basics',
      description: 'Introduction to atomic structure',
      thumbnail: '/assets/images/img3.jpg',
      duration: '52:45',
      uploadDate: '2024-03-13',
      views: 1567
    },
     {
        id: '1',
        title: 'Introduction to Mathematics',
        description: 'Basic concepts of algebra and calculus',
        thumbnail: '/assets/images/img1.jpg',
        duration: '45:30',
        uploadDate: '2024-03-15',
        views: 1234
      },
      {
        id: '2',
        title: 'Physics Fundamentals',
        description: 'Understanding Newton\'s laws and motion',
        thumbnail: '/assets/images/img2.jpg',
        duration: '38:15',
        uploadDate: '2024-03-14',
        views: 856
      },
      {
        id: '3',
        title: 'Chemistry Basics',
        description: 'Introduction to atomic structure',
        thumbnail: '/assets/images/img3.jpg',
        duration: '52:45',
        uploadDate: '2024-03-13',
        views: 1567
      }
  ]);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // State for managing the delete modal and menu
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<Video | null>(null);

  // Handlers for menu and delete
  const handleMenuClick = (itemId: string) => {
    setOpenMenuId(openMenuId === itemId ? null : itemId);
  };

  const handleDeleteClick = (item: Video) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
    setOpenMenuId(null);
  };

  const handleConfirmDelete = async () => {
    if (!itemToDelete) return;

    try {
      // Simulate delete operation (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 500));
      // In a real application, you would update the videos state here
      // setVideos(videos.filter(video => video.id !== itemToDelete.id));
      toast.success(`Video "${itemToDelete.title}" has been deleted`);
      setShowDeleteModal(false);
      setItemToDelete(null);
    } catch (error) {
      toast.error(`Failed to delete video "${itemToDelete.title}"`);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="flex-1 p-6 hide-scrollbar">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
          <div className="flex flex-col flex-grow">
          <h1 className="text-2xl font-bold mb-10">Available Videos</h1>
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
          </div>
          <div className="relative flex-shrink-0">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-[8px] font-semibold flex items-center gap-2" onClick={toggleDropdown}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l4 4v1h-16v-1l4-4a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                Filter by class
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-blue-600 rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <li><a href="#" className="block px-4 py-2 text-sm text-white hover:bg-blue-700">s1</a></li>
                  <li><a href="#" className="block px-4 py-2 text-sm text-white hover:bg-blue-700">s2</a></li>
                  <li><a href="#" className="block px-4 py-2 text-sm text-white hover:bg-blue-700">s3</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="relative bg-gray-400/20 rounded-xl border border-gray-200 shadow-sm  hover:shadow-md transition-shadow">
            <div className="relative aspect-video group">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white/90 p-4 rounded-full hover:bg-white transition-colors">
                  <img src="/assets/icons/play.svg" alt="Play" className="w-8 h-8" />
                </button>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                {video.duration}
              </div>
            </div>
            <div className="p-4 relative">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-lg line-clamp-1 flex-1">{video.title}</h3>
                {/* Menu for videos */}
                <div className="relative menu-container">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click from interfering
                      handleMenuClick(video.id);
                    }}
                    className="p-1 hover:bg-gray-100 rounded-full"
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
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                  {openMenuId === video.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent menu click from closing immediately
                          handleDeleteClick(video);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-1 line-clamp-2">{video.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>{video.views.toLocaleString()} views</span>
                  <span className="mx-1">•</span>
                  <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 right-2">
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                <img src="/assets/icons/download.svg" alt="Download" className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Delete Modal */}
      {showDeleteModal && itemToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete "{itemToDelete.title}"? This
              action cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setItemToDelete(null);
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default VideoSection;



