import { db } from "@/lib/db";
import { Categories } from "./_components/categories";
import SearchInput from "@/components/searchinput";

const SearchPage = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <div className="p-6">
        <Categories items={categories} />
      </div>
    </>
  );
};

export default SearchPage;

{
  /*const SearchPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Search Bar 
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Browse Courses</h1>
        <input
          type="text"
          placeholder="Search for courses..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md"
        />
      </div>

      {/* Filter Section 
      <div className="flex flex-wrap gap-4">
        <select className="border border-gray-300 rounded-lg px-4 py-2" title="1">
          <option value="">All Categories</option>
          <option value="programming">Programming</option>
          <option value="data-science">Data Science</option>
          <option value="design">Design</option>
        </select>

        <select className="border border-gray-300 rounded-lg px-4 py-2" title="2">
          <option value="">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <select className="border border-gray-300 rounded-lg px-4 py-2" title="3">
          <option value="">Sort by</option>
          <option value="popularity">Popularity</option>
          <option value="newest">Newest</option>
          <option value="rating">Highest Rating</option>
        </select>
      </div>

      {/* Course List Section 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample course card 1 
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Introduction to Python</h2>
          <p className="mt-2 text-sm text-gray-600">Learn the basics of Python programming, from syntax to simple algorithms.</p>
          <div className="mt-4">
            <span className="inline-block bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm font-medium">Beginner</span>
          </div>
        </div>

        {/* Sample course card 2 
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Data Structures and Algorithms</h2>
          <p className="mt-2 text-sm text-gray-600">A comprehensive guide to understanding and implementing data structures.</p>
          <div className="mt-4">
            <span className="inline-block bg-green-100 text-green-600 rounded-full px-3 py-1 text-sm font-medium">Intermediate</span>
          </div>
        </div>

        {/* Sample course card 3 
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-medium">Frontend Development with React</h2>
          <p className="mt-2 text-sm text-gray-600">Master the essentials of frontend development using the popular React framework.</p>
          <div className="mt-4">
            <span className="inline-block bg-yellow-100 text-yellow-600 rounded-full px-3 py-1 text-sm font-medium">Advanced</span>
          </div>
        </div>

        {/* Add more course cards as needed 
      </div>
    </div>
  );
}

export default SearchPage;*/
}
