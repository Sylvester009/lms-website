import { IconBadge } from "@/components/iconBadge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { CircleDollarSign, LayoutDashboard, ListChecks } from "lucide-react";
import { redirect } from "next/navigation";
import { FormTitle } from "./_components/form-title";
import { FormDescription } from "./_components/form-description";
import { ImageForm } from "./_components/imageForm";
import { CategoryForm } from "./_components/category-form";
import { PriceForm } from "./_components/price-form";


const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
  });

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  })

  if (!course) {
    return redirect("/");
  }

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields} / ${totalFields})`;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Course Setup</h1>
          <span className="text-sm text-orange-700">
            Complete all the fields {completionText}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
            <div className="flex items-center gap-x-2">
                <IconBadge icon={LayoutDashboard}/>
                <h2 className="text-xl">Customize your course</h2>
            </div>
            <FormTitle
            initialData={course}
            courseId={course.id}
            />
            <FormDescription
            initialData={course}
            courseId={course.id}
            />
            <ImageForm
            initialData={course}
            courseId={course.id}
            />
            <CategoryForm
            initialData={course}
            courseId={course.id}
            options={categories.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
            />
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={ListChecks} />
              <h2 className="text-xl">
                Course chapters
              </h2>
            </div>
            <div>
              TODO: chapters
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={CircleDollarSign} />
              <h2 className="text-xl">
                Sell your course
              </h2>
            </div>
            <PriceForm 
            initialData={course}
            courseId={course.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseIdPage;
