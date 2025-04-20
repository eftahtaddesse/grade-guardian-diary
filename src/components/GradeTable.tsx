
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

interface Grade {
  subject: string;
  score: string;
  grade: string;
  date: Date;
}

interface GradeTableProps {
  grades: Grade[];
  subject: string;
}

const GradeTable = ({ grades, subject }: GradeTableProps) => {
  const subjectGrades = grades.filter((grade) => grade.subject === subject);

  if (subjectGrades.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border bg-card mb-6">
      <div className="bg-purple-50 p-4 rounded-t-lg border-b">
        <h3 className="text-lg font-semibold text-purple-900">{subject}</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Grade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subjectGrades.map((grade, index) => (
            <TableRow key={index}>
              <TableCell>{format(grade.date, "PPP")}</TableCell>
              <TableCell>{grade.score}</TableCell>
              <TableCell>{grade.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default GradeTable;
