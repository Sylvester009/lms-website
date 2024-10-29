/*import Link from "next/link";
import Image from "next/image";
import { IconBadge } from "./iconBadge";
import { BookOpen } from "lucide-react";
import { FormatPrice } from "@/lib/format";

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl?: string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: string;
}

export const CourseCard = ({
  id,
  title,
  imageUrl = "/logo.svg",
  chaptersLength,
  price,
  progress,
  category,
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h0-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
            <Image
            fill
            className="object-cover"
            alt={title}
            src={imageUrl || "/placeholder.jpeg"}
            />
        </div>
        <div className="flex flex-col pt-2">
            <div className="text-lg md:text-base font-medium group-hover:text-orange-700 transition line-clamp-2">
                {title}
            </div>
            <p className = "text-xs text-muted-forground">
                {category}
            </p>
            <div className = "flex items-center gap-x-1 text-orange-500">
                <IconBadge size="sm" icon={BookOpen}/>
                <span>
                    {chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
                </span>
            </div> 
        </div>
        {progress !== null ? (
            <div>
                TODO: Progress Component
                </div>
        ): (
            <p className="text-md md:text-sm font-medium text-orange-700">
                {FormatPrice(price)}
            </p>
        )}
      </div>
    </Link>
  );
};*/

import Link from "next/link";
import Image from "next/image";
import { IconBadge } from "./iconBadge";
import { BookOpen } from "lucide-react";
import { FormatPrice } from "@/lib/format";
import { Category } from "@prisma/client"; // Adjust the import path based on your project structure

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl?: string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: Category; // Using the imported Category type
}

export const CourseCard = ({
  id,
  title,
  imageUrl = "/logo.svg", // Default image
  chaptersLength,
  price,
  progress,
  category,
}: CourseCardProps) => {
  let displayImageUrl;

  // Conditional rendering based on the category
  if (category.name === "Computer Science") { 
    displayImageUrl = "/placeholder.jpeg";
  } else if (category.name === "Fitness") {
    displayImageUrl = "/fitness.jpeg";
  } else if (category.name === "Engineering") {
    displayImageUrl = "/engineering.jpeg";
  } else if (category.name === "Web Design") {
    displayImageUrl = "/webdesign.jpeg";
  } else if (category.name === "Graphics") {
    displayImageUrl = "/graphics.jpeg";
  } else if (category.name === "Modelling") {
    displayImageUrl = "/model.jpeg";
  } else if (category.name === "Odoo ERP") {
    displayImageUrl = "/placeholder.jpeg";
  } else if (category.name === "Accounting") {
    displayImageUrl = "/placeholder.jpeg";
  } else {
    displayImageUrl = "/logo.svg"; // Fallback to the provided image URL or logo.svg
  }

  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image
            fill
            className="object-cover"
            alt={title}
            src={displayImageUrl} // Use the determined display image URL
          />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-orange-700 transition line-clamp-2">
            {title}
          </div>
          <p className="text-xs text-muted-forground">
            {category.name} {/* Display the category name */}
          </p>
          <div className="flex items-center gap-x-1 text-orange-500">
            <IconBadge size="sm" icon={BookOpen} />
            <span>
              {chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
            </span>
          </div>
        </div>
        {progress !== null ? (
          <div>
            TODO: Progress Component
          </div>
        ) : (
          <p className="text-md md:text-sm font-medium text-orange-700">
            {FormatPrice(price)}
          </p>
        )}
      </div>
    </Link>
  );
};
