import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Mux from "@mux/mux-node";

// Commenting out Mux initialization
/*
const mux = new Mux(
    process.env.MUX_TOKEN_ID!,
    process.env.MUX_TOKEN_SECRET!,
);
const { Video } = mux;
*/

export async function DELETE(
    request: Request,
    { params }: { params: { courseId: string; chapterId: string } }
) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const courseOwner = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId,
            }
        });

        if (!courseOwner) {
            return new NextResponse("Not Found", { status: 404 });
        }

        const chapter = await db.chapter.findUnique({
            where: {
                id: params.chapterId,
                courseId: params.courseId,
            },
        });

        if (!chapter) {
            return new NextResponse("Not Found", { status: 404 });
        }

        /*
        // Commenting out Mux-related code for chapter deletion
        if (chapter.videoUrl) {
            const existingMuxData = await db.muxData.findFirst({
                where: {
                    chapterId: params.chapterId,
                },
            });

            if (existingMuxData) {
                await Video.Assets.del(existingMuxData.assetId);
                await db.muxData.delete({
                    where: {
                        id: existingMuxData.id,
                    }
                });
            }
        }
        */

        const deletedChapter = await db.chapter.delete({
            where: {
                id: params.chapterId,
            }
        });

        const publishedChapters = await db.chapter.findMany({
            where: {
                courseId: params.courseId,
                isPublished: true,
            }
        });

        if (!publishedChapters.length) {
            await db.course.update({
                where: {
                    id: params.courseId,
                },
                data: {
                    isPublished: false,
                }
            });
        }

        return NextResponse.json(deletedChapter);

    } catch (error) {
        console.log("[Chapter Id Delete]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function PATCH(
    request: Request,
    { params }: { params: { courseId: string; chapterId: string } }
) {
    try {
        const { userId } = auth();
        const { isPublished, ...values } = await request.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const courseOwner = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId
            }
        });

        if (!courseOwner) {
            return new NextResponse("Not Found", { status: 404 });
        }

        const chapter = await db.chapter.update({
            where: {
                id: params.chapterId,
                courseId: params.courseId,
            },
            data: {
                ...values,
            }
        });

        /*
        // Commenting out Mux-related code for chapter update
        if (values.videoUrl) {
            const existingMuxData = await db.muxData.findFirst({
                where: {
                    chapterId: params.chapterId,
                }
            });

            if (existingMuxData) {
                await Video.Assets.del(existingMuxData.assetId);
                await db.muxData.delete({
                    where: {
                        id: existingMuxData.id,
                    }
                });
            }

            const asset = await Video.Assets.create({
                input: values.videoUrl,
                playback_policy: "public",
                test: false,
            });

            await db.muxData.create({
                data: {
                    chapterId: params.chapterId,
                    assetId: asset.id,
                    playbackId: asset.playback_ids?.[0]?.id,
                }
            });
        }
        */

        return NextResponse.json(chapter);

    } catch (error) {
        console.log("[COURSES CHAPTER ID]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
