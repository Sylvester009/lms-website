import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
    request: Request,
    { params }: { params: { courseId: string } }
) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse('unauthorized', { status: 401 });
        }

        const course = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId
            },
            include: {
                chapters: {
                    include: {
                        muxData: true
                    }
                }
            }
        })

        if (!course) {
            return new NextResponse("Course not found", { status: 404 });
        }

        const haspublishedChapter = course.chapters.some((chapter) => chapter.isPublished);

        if (!course.title || !course.description || !course.categoryId || !haspublishedChapter) {
            return new NextResponse("All fields are required and a published chapter must exist", { status: 400 });
        }

        const publishedCourse = await db.course.update({
            where: {
                id: params.courseId,
                userId,
            },
            data: {
                isPublished: true,
            }
        })

        return NextResponse.json(publishedCourse);
    } catch (error) {
        console.log("[Course Id PUBLISH]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}