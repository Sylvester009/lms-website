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

        const chapter = await db.chapter.findUnique({
            where: {
                id: params.chapterId,
                courseId: params.courseId
            }
        })

        const muxData = await db.muxData.findUnique({
            where: {
                chapterId: params.chapterId
            }
        })

        const publishedChapter = await db.chapter.update({
            where: {
                id: params.chapterId,
                courseId: params.courseId,
            },
            data: {
                isPublished: true,
            }
        });

        return NextResponse.json(publishedChapter);

    } catch (error) {
        console.log("[CHAPTER PUBLISH]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}