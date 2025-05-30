import React from 'react';

interface Course {
  id: number;
  icon: string;
  name: string;
  lessonsProgress: string;
  status: 'Complete' | 'Ongoing';
  level: string;
  category: string;
}

const MyCourse1: React.FC = () => {
  const courses: Course[] = [
    {
      id: 1,
      icon: '/assets/images/monster.jpg',
      name: 'Mastering Design System',
      lessonsProgress: '15/15',
      status: 'Complete',
      level: 's3',
      category: '3D modles',
    },
    {
      id: 2,
      icon: '/assets/images/marketing.jpg', 
      name: 'UI/UX Design',
      lessonsProgress: '12/15',
      status: 'Ongoing',
      level: 'p5',
      category: 'Design',
    },
    {
      id: 3,
      icon: '/assets/images/image2.png', 
      name: 'Learn Data Analyst',
      lessonsProgress: '8/20',
      status: 'Ongoing',
      level: 'year2',
      category: 'Data',
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-4">
      <div className="grid grid-cols-5 gap-4 text-gray-500 text-sm font-medium border-b border-gray-200 pb-2 mb-2">
        <div className="col-span-2 text-purple-950">Course Name</div>
        <div className='text-purple-950'>Lessons</div>
        <div className='text-purple-950'>Status</div>
        <div className='text-purple-950'>Class</div>
      </div>

      <div>
        {courses.map((course) => (
          <div key={course.id} className="grid grid-cols-5 gap-4 items-center border-b border-gray-100 py-3">
            <div className="col-span-2 flex items-center gap-3">
              <img src={course.icon} alt={course.name} className="w-10 h-10 rounded-md object-cover" />
              <span className="text-gray-800 font-medium text-sm">{course.name}</span>
            </div>
            <div className="text-gray-700 text-sm">{course.lessonsProgress}</div>
            <div className={`text-xs font-semibold px-2 py-1 rounded-[6px] text-center ${
                course.status === 'Complete' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
              }`}>
              {course.status}
            </div>
            <div className="text-gray-700 text-sm pl-4">{course.level}</div>
            <div className="text-purple-900 text-sm font-bold">{course.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourse1;
