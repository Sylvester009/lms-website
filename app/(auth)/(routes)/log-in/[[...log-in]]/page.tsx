import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex h-screen bg-orange-100">
      {/* Left Content Section */}
      <div className="hidden md:flex w-1/2 text-orange-800 p-12 flex-col justify-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Empower Your <br /> Learning Journey
        </h1>
        <p className="text-lg font-light mb-4 leading-relaxed max-w-md">
          Explore a world of knowledge with courses that take you from beginner to expert in various fields. 
          Your path to new skills and career growth starts here.
        </p>
        <p className="text-sm text-orange-600 font-semibold tracking-wide">
          Join our community of learners and start achieving your goals one course at a time.
        </p>
      </div>

      {/* Right Login Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
