"use client";

import { Category } from "@prisma/client";

import {
    FcEngineering,
    FcSportsMode,
    FcMultipleDevices,
    FcGallery,
    FcPortraitMode,
    FcDatabase
} from "react-icons/fc"
import { IconType } from "react-icons/lib";
import CategoryItem from "./categoryitem";

interface CategoriesProps {
    items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
    "Computer Science": FcMultipleDevices,
    "Fitness": FcSportsMode,
    "Graphics": FcGallery,
    "Modelling": FcPortraitMode,
    "Web Design": FcDatabase,
    "Engineering": FcEngineering,
}

export const Categories = ({
    items,
}:CategoriesProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {items.map((item) => (
                <CategoryItem 
                key={item.id}
                label={item.name}
                icon={iconMap[item.name]}
                value={item.id}
                />
            ))}
        </div>
    )
}