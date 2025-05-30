import { useState } from "react";
import { toast } from "react-hot-toast";

interface Note {
  id: string;
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  uploadDate: string;
  downloads: number;
}

const Uploadednotes = () => {
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

  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<Note | null>(null);

  const handleMenuClick = (itemId: string) => {
    setOpenMenuId(openMenuId === itemId ? null : itemId);
  };

  const handleDeleteClick = (item: Note) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
    setOpenMenuId(null);
  };

  const handleConfirmDelete = async () => {
    if (!itemToDelete) return;

    try {
      // Simulate delete operation (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 500));
      // In a real application, you would update the notes state here
      // setNotes(notes.filter(note => note.id !== itemToDelete.id));
      toast.success(`Note "${itemToDelete.title}" has been deleted`);
      setShowDeleteModal(false);
      setItemToDelete(null);
    } catch (error) {
      toast.error(`Failed to delete note "${itemToDelete.title}"`);
    }
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex-1 p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
          <div className="flex flex-col flex-grow">
            <h1 className="text-2xl font-bold mb-10">Available Notes</h1>
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
                {/* Menu for notes */}
                <div className="relative menu-container">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click from interfering
                      handleMenuClick(note.id);
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
                  {openMenuId === note.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent menu click from closing immediately
                          handleDeleteClick(note);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        Delete
                      </button>
                    </div>
                  )}
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
            <div className="absolute bottom-2 right-2">
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                <img
                  src="/assets/icons/download.svg"
                  alt="Download"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      {notes.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            No notes uploaded yet
          </h3>
          <p className="text-gray-500">Upload your first note to get started</p>
        </div>
      )}

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

export default Uploadednotes;
