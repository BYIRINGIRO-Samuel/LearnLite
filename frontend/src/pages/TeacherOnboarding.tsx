import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Assuming a type definition for Class and Course might be needed later
// import type { Class, Course } from "../types"; 

interface TeacherClassData {
  className: string;
  courseNames: string[];
}

const TeacherOnboarding = () => {
  const navigate = useNavigate();
  const [teacherClasses, setTeacherClasses] = useState<TeacherClassData[]>([]);
  const [selectedClassName, setSelectedClassName] = useState("");
  const [availableCourses, setAvailableCourses] = useState<string[]>([]);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Placeholder data - replace with actual data fetching later
  const allAvailableClasses = [
    { name: "primary 1", courses: ["Mathematics", "Science", "Social Studies"] },
    { name: "primary 2", courses: ["Mathematics", "Science and Elementary Technology", "Kinyarwanda"] },
    { name: "primary 3", courses: ["Kinyarwanda", "Social and Religious Studies", "Mathematics"] },
    { name: "S1", courses: ["Mathematics", "Physics", "Chemistry"] },
    { name: "S2", courses: ["Mathematics", "Physics", "Chemistry"] },
  ];

  const handleClassSelect = (className: string) => {
    setSelectedClassName(className);
    const selectedClass = allAvailableClasses.find(c => c.name === className);
    if (selectedClass) {
      setAvailableCourses(selectedClass.courses);
      setSelectedCourses([]); // Reset selected courses when class changes
    } else {
      setAvailableCourses([]);
      setSelectedCourses([]);
    }
    setError("");
    setSuccess("");
  };

  const handleCourseSelect = (courseName: string) => {
    setSelectedCourses(prev => 
      prev.includes(courseName) 
        ? prev.filter(course => course !== courseName) 
        : [...prev, courseName]
    );
  };

  const handleAddClassWithCourses = () => {
    setError("");
    setSuccess("");

    if (!selectedClassName) {
      setError("Please select a class.");
      return;
    }

    if (selectedCourses.length === 0) {
      setError(`Please select at least one course for ${selectedClassName}.`);
      return;
    }

    const existingClassIndex = teacherClasses.findIndex(tc => tc.className === selectedClassName);

    if (existingClassIndex > -1) {
      // If class already exists, update its courses
      const updatedTeacherClasses = [...teacherClasses];
      updatedTeacherClasses[existingClassIndex].courseNames = [
        ...new Set([...updatedTeacherClasses[existingClassIndex].courseNames, ...selectedCourses]) // Add unique courses
      ];
      setTeacherClasses(updatedTeacherClasses);
      setSuccess(`Updated courses for ${selectedClassName}.`);
    } else {
      // If class is new, add it
      setTeacherClasses(prev => [...prev, { className: selectedClassName, courseNames: selectedCourses }]);
      setSuccess(`Added ${selectedClassName} with selected courses.`);
    }
    
    // Optionally reset selections after adding/updating
    // setSelectedClassName("");
    // setAvailableCourses([]);
    // setSelectedCourses([]);
  };

  const handleSubmit = () => {
    console.log("Teacher Onboarding Data:", teacherClasses);
    // API call would go here
    navigate("/teacherdashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Teacher Onboarding
          </h1>
          {/* Progress bar can be added here if multiple steps are introduced later */}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg mb-4">
            {error}
          </div>
        )}
        
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-2 rounded-lg mb-4">
            {success}
          </div>
        )}

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Select Classes and Courses
          </h2>
          
          <div className="space-y-4">
            {/* Class Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="classSelect">
                Select Class <span className="text-red-500">*</span>
              </label>
              <select
                id="classSelect"
                value={selectedClassName}
                onChange={(e) => handleClassSelect(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">-- Select a Class --</option>
                {allAvailableClasses.map(cls => (
                  <option key={cls.name} value={cls.name}>{cls.name}</option>
                ))}
              </select>
            </div>

            {/* Course Selection */}
            {availableCourses.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  Select Courses for {selectedClassName}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {availableCourses.map((course, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`course-${index}`}
                        checked={selectedCourses.includes(course)}
                        onChange={() => handleCourseSelect(course)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor={`course-${index}`}
                        className="text-sm text-gray-700"
                      >
                        {course}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleAddClassWithCourses}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!selectedClassName || selectedCourses.length === 0}
            >
              Add Selected Courses to Class
            </button>
          </div>

          {/* Display Added Classes and Courses */}
          {teacherClasses.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Classes and Courses Added:
              </h3>
              <div className="space-y-4">
                {teacherClasses.map((classItem, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{classItem.className}</h4>
                      {/* Remove button for a class */}
                      <button
                        onClick={() => {
                          setTeacherClasses(teacherClasses.filter((_, i) => i !== index));
                        }}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove Class
                      </button>
                    </div>
                    <ul className="space-y-1">
                      {classItem.courseNames.map((course, courseIndex) => (
                        <li
                          key={courseIndex}
                          className="text-sm text-gray-600"
                        >
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={teacherClasses.length === 0}
          >
            Complete Onboarding
          </button>
        </div>

      </div>
    </div>
  );
};

export default TeacherOnboarding;
