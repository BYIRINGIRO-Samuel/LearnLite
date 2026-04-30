//import Bottombar from '../components/Bottombar';
import AdminLeftsidebar from '../components/adminleftsidebar';
import AdminTopbar from '../components/AdminTopbar';
import TeachersManagementSection from '../components/TeachersManagementSection';

const ManageTeachers = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="hidden md:flex flex-shrink-0 overflow-y-auto hide-scrollbar">
        <AdminLeftsidebar />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminTopbar userName="" />
        <div className="border-b border-gray-200"></div>
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 hide-scrollbar">
            <TeachersManagementSection/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTeachers;
