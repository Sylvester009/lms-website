import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const bgVariants = cva("rounded-full flex items-center justify-center", {
  variants: {
    variant: {
      default: "bg-orange-100",
      success: "bg-pink-100",
    },
    iconVariant: {
      default: "text-orange-700",
      success: "text-pink-700",
    },
    size: {
      default: "p-2",
      sm: "p-1",
    },
  },
  defaultVariants: {
    variant: "default",
    iconVariant: "default",
    size: "default",
  },
});

const iconVariants = cva(
  //"transition-all duration-200 transform",
  "",
  {
    variants: {
      variant: {
        default: "text-orange-700",
        success: "text-pink-700",
      },
      size: {
        default: "h-6 w-6",
        sm: "h-4 w-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type BgVariantsProps = VariantProps<typeof bgVariants>;
type IconVariantsProps = VariantProps<typeof iconVariants>;

interface IconBadgeProps extends BgVariantsProps, IconVariantsProps {
  icon: LucideIcon;
}

export const IconBadge = ({ icon: Icon, variant, size }: IconBadgeProps) => {
  return (
    <div className={cn(bgVariants({ variant, size }))}>
      <Icon className={cn(iconVariants({ variant, size }))} />
    </div>
  );
};
