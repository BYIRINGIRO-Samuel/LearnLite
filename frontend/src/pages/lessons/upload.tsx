import React, { useState } from 'react';
import { toast } from "sonner";
import Topbar from '../../components/Topbar';
import Teacherleftsidebar from '../../components/teacherleftsidebar';
import { useNavigate } from 'react-router-dom';

interface VideoUpload {
  title: string;
  description: string;
  class: string;
  file: File | null;
}

const Upload = () => {
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [videoData, setVideoData] = useState<VideoUpload>({
    title: '',
    description: '',
    class: '',
    file: null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('video/')) {
        setVideoData(prev => ({ ...prev, file }));
      } else {
        toast.error('Please upload a valid video file');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoData.file || !videoData.title || !videoData.class) {
      toast.error('Please fill in all required fields and select a video');
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('title', videoData.title);
      formData.append('description', videoData.description);
      formData.append('class', videoData.class);
      formData.append('video', videoData.file);

      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Video uploaded successfully!');
      setVideoData({ title: '', description: '', class: '', file: null });
    } catch (error) {
      toast.error('Failed to upload video. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="hidden md:block w-72 flex-shrink-0 overflow-y-auto hide-scrollbar">
        <Teacherleftsidebar />
      </div>

      <div className="flex flex-col flex-1 overflow-hidden w-full md:w-auto">
        <div className="md:hidden flex items-center p-4 bg-white border-b border-gray-200">
          <div className="flex items-center gap-2">
            <svg
              className="w-8 h-8 text-[#1DA1F2]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 20.5L21 12 3 3.5v7l12 1.5-12 1.5v7z" fill="#1DA1F2" />
            </svg>
            <h1 className="text-xl font-bold text-blue-500">LearnLite</h1>
          </div>
        </div>

        <div className="hidden md:block">
          <Topbar />
        </div>
        <div className="border-b border-gray-200"></div>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 hide-scrollbar">
          <button 
            onClick={() => navigate('/teacherdashboard/lessons/uploadvideos')}
            className="mb-4 hover:opacity-80 transition-opacity"
          >
            <img src="/assets/icons/back.svg" alt="back" className='h-8 w-8' />
          </button>
          <h1 className="text-2xl text-center md:text-3xl font-bold mb-6 md:mb-8">Upload Video Lesson</h1>
          
          <div className="max-w-2xl mx-auto bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-4 md:p-6 border-b border-gray-200">
              <h2 className="text-lg md:text-xl font-semibold">Upload New Video</h2>
            </div>

            <div className="p-4 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Video Title *
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={videoData.title}
                    onChange={(e) => setVideoData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter video title"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="class" className="block text-sm font-medium text-gray-700">
                    Video Class *
                  </label>
                  <input
                    id="class"
                    type="text"
                    value={videoData.class}
                    onChange={(e) => setVideoData(prev => ({ ...prev, class: e.target.value }))}
                    placeholder="Enter the class to share the video"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={videoData.description}
                    onChange={(e) => setVideoData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Enter video description"
                    className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="video" className="block text-sm font-medium text-gray-700">
                    Video File *
                  </label>
                  <input
                    id="video"
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <p className="text-sm text-gray-500">
                    Supported formats: MP4, WebM, MOV (Max size: 500MB)
                  </p>
                </div>

                <button
                  type="submit" 
                  disabled={uploading}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {uploading ? 'Uploading...' : 'Upload Video'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;