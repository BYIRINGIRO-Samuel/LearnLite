import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  uploadDate: string;
  views: number;
}

const Uploadedvideos = () => {
  const navigate = useNavigate();
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

  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [deletingVideoId, setDeletingVideoId] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [videoToDelete, setVideoToDelete] = useState<Video | null>(null);

  const handleMenuClick = (videoId: string) => {
    setOpenMenuId(openMenuId === videoId ? null : videoId);
  };

  const handleDeleteClick = (video: Video) => {
    setVideoToDelete(video);
    setShowDeleteModal(true);
    setOpenMenuId(null);
  };

  const handleConfirmDelete = async () => {
    if (!videoToDelete) return;
    
    setDeletingVideoId(videoToDelete.id);
    try {
      // Simulate delete operation
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success(`Video "${videoToDelete.title}" has been deleted`);
      setDeletingVideoId(null);
      setShowDeleteModal(false);
      setVideoToDelete(null);
    } catch (error) {
      toast.error('Failed to delete video');
      setDeletingVideoId(null);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openMenuId && !(event.target as Element).closest('.menu-container')) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [openMenuId]);

  return (
    <div className="flex-1 overflow-y-auto p-6 hide-scrollbar">
      {/* Delete Confirmation Modal */}
      {showDeleteModal && videoToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0">
                <svg className="h-10 w-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Delete Video</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Are you sure you want to delete "{videoToDelete.title}"? This action cannot be undone.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setVideoToDelete(null);
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={deletingVideoId === videoToDelete.id}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                disabled={deletingVideoId === videoToDelete.id}
              >
                {deletingVideoId === videoToDelete.id ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Deleting...
                  </>
                ) : (
                  'Delete'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">
            
            Uploaded Videos</h1>

        <button 
          onClick={() => navigate('/teacherdashboard/lessons/uploadvideos/upload')}
          className="relative flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg w-56 hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md group"
        >
            <img src="/assets/icons/videos.svg" className="h-5 w-5 transition-transform group-hover:scale-110" alt="Upload icon" />
            <span className="font-medium">Upload New Video</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-gray-400/20 rounded-xl border border-gray-200 shadow-sm overflow-visible hover:shadow-md  transition-shadow group">
            <div className="relative aspect-video">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-200 bg-white bg-opacity-90 p-4 rounded-full shadow-lg hover:bg-opacity-100">
                  <svg 
                    className="w-8 h-8 text-blue-600" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-2 right-2   text-black px-2 py-1 rounded text-sm">
                {video.duration}
              </div>
            </div>

            <div className="p-4 relative">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-lg line-clamp-1 flex-1">{video.title}</h3>
                <div className="menu-container relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMenuClick(video.id);
                    }}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    disabled={deletingVideoId === video.id}
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>

                  {openMenuId === video.id && (
                    <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                      <div className="py-1">
                        <button
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenMenuId(null);
                            navigate(`/teacherdashboard/lessons/uploadvideos/edit/${video.id}`);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-blue-500 hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteClick(video);
                          }}
                          disabled={deletingVideoId === video.id}
                        >
                          Delete
                        </button>
                      </div>
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
          </div>
        ))}
      </div>

      {videos.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No videos uploaded yet</h3>
          <p className="text-gray-500">Upload your first video to get started</p>
        </div>
      )}
    </div>
  );
};

export default Uploadedvideos;
