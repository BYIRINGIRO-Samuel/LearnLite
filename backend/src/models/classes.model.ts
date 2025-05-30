import mongoose from "mongoose";

export interface IClass extends mongoose.Document {
  name: string;
  students: mongoose.Types.ObjectId[];
  teachers: mongoose.Types.ObjectId[];
  courses: mongoose.Types.ObjectId[];
  academicLevel:
    | "primary"
    | "secondary"
    | "college"
    | "university"
    | "technical";
  school: mongoose.Types.ObjectId;
  toggleCourse: (courseId: mongoose.Types.ObjectId) => Promise<IClass>;
}

const classSchema = new mongoose.Schema<IClass>(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 10,
      required: true,
    },
    academicLevel: {
      type: String,
      enum: ["primary", "secondary", "college", "university", "technical"],
      required: true,
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
    },
    students: { type: [mongoose.Schema.Types.ObjectId], ref: "User" },
    teachers: { type: [mongoose.Schema.Types.ObjectId], ref: "User" },
    courses: { type: [mongoose.Schema.Types.ObjectId], ref: "Course" },
  },
  {
    timestamps: true,
  },
);

classSchema.index({ name: 1, school: 1 }, { unique: true });

const Class = mongoose.model<IClass>("Class", classSchema);
export default Class;

classSchema.methods.toggleCourse = function (
  courseId: mongoose.Types.ObjectId,
) {
  const courseIdStr = courseId.toString();
  const exists = this.courses.find(
    (id: mongoose.Types.ObjectId) => id.toString() === courseIdStr,
  );

  if (exists)
    this.courses = this.courses.filter(
      (id: mongoose.Types.ObjectId) => id.toString() !== courseIdStr,
    );
  else this.courses.push(courseId);

  return this.save();
};

classSchema.methods.toggleStudent = function (
  studentId: mongoose.Types.ObjectId,
) {
  const studentIdStr = studentId.toString();
  const exists = this.students.find(
    (id: mongoose.Types.ObjectId) => id.toString() === studentIdStr,
  );

  if (exists)
    this.students = this.students.filter(
      (id: mongoose.Types.ObjectId) => id.toString() !== studentIdStr,
    );
  else this.students.push(studentId);

  return this.save();
};

classSchema.methods.toggleTeacher = function (
  teacherId: mongoose.Types.ObjectId,
) {
  const teacherIdStr = teacherId.toString();
  const exists = this.students.find(
    (id: mongoose.Types.ObjectId) => id.toString() === teacherIdStr,
  );

  if (exists)
    this.students = this.students.filter(
      (id: mongoose.Types.ObjectId) => id.toString() !== teacherIdStr,
    );
  else this.students.push(teacherId);

  return this.save();
};
