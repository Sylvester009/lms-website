"use client";

import ConfirmModal from "@/components/modals/modal-confirm";
import { Button } from "@/components/ui/button";
import { ConfettiStore } from "@/hooks/confetti-store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface CourseActionProps {
  courseId: string;
  isPublished: boolean;
}

const CourseAction = ({ courseId, isPublished }: CourseActionProps) => {
  const router = useRouter();
  const confetti = ConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onPublish = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/unpublish`);
        toast.success("course unpublished");
      } else {
        await axios.patch(`/api/courses/${courseId}/publish`);
        toast.success("course published");
        confetti.onOpen();
      }

      router.refresh();
    } catch {
      toast.error("Failed to publish course");
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/courses/${courseId}`);

      toast.success("Course deleted");
      router.refresh();
      router.push(`/teacher/courses`);
    } catch {
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-x-2 items-center">
      <Button onClick={onPublish} variant="outline" size="sm">
        {isPublished ? "Unpublish" : "Publish"}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button size="sm">Delete</Button>
      </ConfirmModal>
    </div>
  );
};

export default CourseAction;
