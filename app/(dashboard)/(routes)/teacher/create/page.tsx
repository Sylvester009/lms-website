"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormMessage,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

const CreateCoursePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/courses", values);
      router.push(`/teacher/courses/${response.data.id}`);
      toast.success("Course Created");
    } catch {
      toast.error("Oops, something went wrong");
    }
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center h-full p-8 md:p-12 space-y-6">
      {/* Page Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold text-gray-800">Create a New Course</h1>
        <p className="text-md text-orange-500">Provide a name and details for your course.</p>
      </div>

      {/* Form Section */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 bg-orange-50 p-6 rounded-lg shadow-md"
        >
          {/* Title Field */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium">Course Title</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="e.g., Introduction to Computer Science"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-sm text-orange-500 mt-2">
                  Give a clear, concise name to your course.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <Link href="/">
              <Button type="button" variant="ghost" disabled={isSubmitting}>
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Course"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateCoursePage;
