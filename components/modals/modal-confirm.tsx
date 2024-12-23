"use client";

import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "../ui/alert-dialog";


interface ConfirmModalProps {
    children: React.ReactNode;
    onConfirm: () => void;
};


const ConfirmModal = ({
    children,
    onConfirm
}:ConfirmModalProps) => {
    return ( 
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure
                    </AlertDialogTitle>
                <AlertDialogDescription>
                    This chapter will be deleted and  can&apos;t be undone.
                </AlertDialogDescription>
                </AlertDialogHeader>
            <AlertDialogFooter>
               {/* <Button variant="secondary" mr={3} onClick={() => onConfirm()}>
                    Confirm
                </Button>*/}
                <AlertDialogCancel>
                    Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={onConfirm}>
                    Continue
                </AlertDialogAction>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
     );
}
 
export default ConfirmModal;