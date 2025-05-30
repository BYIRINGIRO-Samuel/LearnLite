import Leftsidebar from "../components/teacherleftsidebar"
import TrProfilePage from "../components/TrProfile"
import TrTopbar from "../components/TrTopbar"

const TeacherProfile = () => {
  return (
    <div className='flex h-screen w-full hide-scrollbar bg-gray-50'>
      <div className="hidden md:flex">
        <Leftsidebar/>
      </div>
      <div className="flex flex-col flex-1 overflow-x-hidden">
          <div className="sticky top-0 z-50">
          <TrTopbar />
        </div>
        <TrProfilePage/>
      </div>
    </div>
  )
}

export default TeacherProfile
