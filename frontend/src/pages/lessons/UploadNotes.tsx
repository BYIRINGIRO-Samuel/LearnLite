import Topbar from '../../components/Topbar';
import Teacherleftsidebar from '../../components/teacherleftsidebar';
import Uploadednotes from './uploadednotes';

const UploadNotes = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar - Hidden on mobile, visible on md and up */}
      <div className="hidden md:block w-72 flex-shrink-0 overflow-y-auto hide-scrollbar">
        <Teacherleftsidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        <div className="border-b border-gray-200"></div>
        <Uploadednotes/>
      </div>
    </div>
  );
};

export default UploadNotes; 