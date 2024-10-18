import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursePage = () => {
    return (
      <div className = "p-6">
       <Link href="/teacher/create">
       <Button>
        New Course
       </Button>
       </Link>
      </div>
    )
  }
  
  export default CoursePage;
  

{/*import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursePage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header 
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">My Courses</h1>
        <Link href="/teacher/create">
          <Button>New Course</Button>
        </Link>
      </div>

      {/* Teacher Statistics Section 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-orange-50 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Total Courses</h2>
          <p className="mt-2 text-3xl font-bold">8</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Active Students</h2>
          <p className="mt-2 text-3xl font-bold">120</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Assignments to Grade</h2>
          <p className="mt-2 text-3xl font-bold">25</p>
        </div>
      </div>

      {/* Courses List Section 
      <div className="bg-orange-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-medium mb-4">Recent Courses</h2>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium">Frontend Development with React</h3>
              <p className="text-sm text-orange-600">20 students enrolled</p>
            </div>
            <Link href="/teacher/course/1">
              <Button>View</Button>
            </Link>
          </li>
          <li className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium">Introduction to Python</h3>
              <p className="text-sm text-orange-600">30 students enrolled</p>
            </div>
            <Link href="/teacher/course/2">
              <Button>View</Button>
            </Link>
          </li>
          <li className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium">Data Structures and Algorithms</h3>
              <p className="text-sm text-orange-600">15 students enrolled</p>
            </div>
            <Link href="/teacher/course/3">
              <Button>View</Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CoursePage;*/}
