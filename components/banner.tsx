import {
  AlertTriangle,
  CheckCircleIcon,
  InfinityIcon,
  InfoIcon,
} from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ErrorIcon } from "react-hot-toast";

const BannerVariants = cva(
  "border text-center p-4 text-sm flex items-center w-full",
  {
    variants: {
      variant: {
        warning: "bg-pink-200/80 border-pink-30 text-primary",
        success: "bg-green-200/80 border-green-30 text-primary",
        info: "bg-blue-200/80 border-blue-30 text-primary",
        error: "bg-red-200/80 border-red-30 text-primary",
        default: "bg-orange-200/80 border-orange-30 text-primary",
      },
    },
    defaultVariants: {
      variant: "warning",
    },
  }
);

interface BannerProps extends VariantProps<typeof BannerVariants> {
  label: string;
}

const iconMap = {
  warning: AlertTriangle,
  success: CheckCircleIcon,
  info: InfoIcon,
  error: ErrorIcon,
  default: InfinityIcon,
};

const Banner = ({ label, variant }: BannerProps) => {
  const Icon = iconMap[variant || "warning"];
  return (
    <div className={cn(BannerVariants({ variant }))}>
      <Icon className="inline-block h-5 w-5 mr-2 text-primary" />
      {label}
    </div>
  );
};

export default Banner;
