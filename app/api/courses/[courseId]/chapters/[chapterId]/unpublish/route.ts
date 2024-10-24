import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function PATCH (
    request: Request,
    { params }: {params: { courseId: string; chapterId: string }}
) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const courseOwner = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId
            }
        })

        if (!courseOwner) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const unPublishedChapter = await db.chapter.update({
            where: {
                id: params.chapterId,
                courseId: params.courseId,
            },
            data: {
                isPublished: false,
            }
        });

        const publishedChapterInCourse = await db.chapter.findMany({
            where: {
                courseId: params.courseId,
                isPublished: true,
            }
        });

        if (!publishedChapterInCourse.length) {
            await db.course.update({
                where: {
                    id: params.courseId,
                },
                data: {
                    isPublished: false,
                }
            });
        }

        return NextResponse.json(unPublishedChapter);

    } catch (error) {
        console.log("[CHAPTER UNPUBLISH]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}