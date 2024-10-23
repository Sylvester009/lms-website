"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import toast from "react-hot-toast";

interface FileUploadProps {
    onChange?: (url?: string) => void;
    endpoint: keyof typeof ourFileRouter;
};

export const FileUpload = ({ onChange = () => {}, endpoint }: FileUploadProps) => {
    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(response) => {
                if (response && response.length > 0) {
                    onChange(response[0].url);
                } else {
                    toast.error("No file uploaded. Please try again.");
                }
            }}
            onUploadError={(error: Error) => {
                console.error("File upload error:", error);
                toast.error(`${error?.message}`);
            }}
        />
    )
}
