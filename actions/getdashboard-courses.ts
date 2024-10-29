import { db } from "@/lib/db";
import { Category, Chapter, Course } from "@prisma/client";
import { getProgress } from "./getprogress";

type CourseWithProgressAndCategory = Course & {
    category: Category;
    chapters: Chapter[];
    progress: number | null;
}

type DashboardCourses = {
    completedCourses: CourseWithProgressAndCategory[];
    coursesInProgress: CourseWithProgressAndCategory[];
}

export const getDashboardCourses = async (userId: string): Promise<DashboardCourses> => {
    try {
        const purchasedCourses = await db.purchase.findMany({
            where: {
                userId: userId,
            },
            select: {
                course: {
                    include: {
                        category: true,
                        chapters: {
                            where: {
                                isPublished: true,
                            }
                        }
                    }
                }
            }
        });

        const courses = purchasedCourses.map((puchase) => puchase.course) as CourseWithProgressAndCategory[];

        for (let course of courses) {
            const progress = await getProgress(userId, course.id);
            course["progress"] = progress;
        }

        const completedCourses = courses.filter((course) => course.progress === 100);

        const coursesInProgress = courses.filter((course) => (course.progress ?? 0) < 100);

        return {
          completedCourses,
          coursesInProgress,  
        }

    } catch (error) {
        console.log("Get Dashbord Courses", error);
        return {
            completedCourses: [],
            coursesInProgress: [],
        }
    }
}