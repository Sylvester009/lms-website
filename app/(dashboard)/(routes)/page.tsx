import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <div>
      <UserButton 
      afterSignOutUrl = "/"
      />
    </div>
  )
}
{/* export default function Home() {
  return (
    <div className="p-6 space-y-6">
      {/* Top section with User button 
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">LMS Dashboard</h1>
        <UserButton afterSignOutUrl="/" />
      </div>

      {/* Overview Cards Section 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-orange-50 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Total Courses</h2>
          <p className="mt-2 text-3xl font-bold">25</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Total Students</h2>
          <p className="mt-2 text-3xl font-bold">1,000</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Active Instructors</h2>
          <p className="mt-2 text-3xl font-bold">12</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Assignments Submitted</h2>
          <p className="mt-2 text-3xl font-bold">540</p>
        </div>
      </div>

      {/* Recent Courses Section 
      <div className="bg-orange-50 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-medium mb-4">Recent Courses</h2>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Introduction to Python</span>
            <span>10 students enrolled</span>
          </li>
          <li className="flex justify-between">
            <span>Data Structures and Algorithms</span>
            <span>8 students enrolled</span>
          </li>
          <li className="flex justify-between">
            <span>Frontend Development with React</span>
            <span>15 students enrolled</span>
          </li>
          <li className="flex justify-between">
            <span>Advanced Machine Learning</span>
            <span>6 students enrolled</span>
          </li>
        </ul>
      </div>

      {/* Student Activity Section 
      <div className="bg-orange-50 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-medium mb-4">Recent Student Activity</h2>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>John Doe submitted an assignment</span>
            <span>1 hour ago</span>
          </li>
          <li className="flex justify-between">
            <span>Jane Smith completed "Data Structures and Algorithms"</span>
            <span>3 hours ago</span>
          </li>
          <li className="flex justify-between">
            <span>Michael Johnson enrolled in "Advanced Machine Learning"</span>
            <span>5 hours ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}*/}
