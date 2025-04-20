
import { useState } from "react";
import GradeInput from "@/components/GradeInput";
import GradeTable from "@/components/GradeTable";

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English Literature",
  "History",
  "Geography",
  "Computer Science",
  "Art",
  "Music",
  "Physical Education",
  "Economics",
  "Foreign Language",
];

interface Grade {
  subject: string;
  score: string;
  grade: string;
  date: Date;
}

const Index = () => {
  const [grades, setGrades] = useState<Grade[]>([]);

  const handleGradeSubmit = (gradeData: Grade) => {
    setGrades([...grades, gradeData]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-purple-900">
          Grade Guardian Diary
        </h1>
        
        <div className="mb-8">
          <GradeInput onSubmit={handleGradeSubmit} />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {subjects.map((subject) => (
            <GradeTable
              key={subject}
              grades={grades}
              subject={subject}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
