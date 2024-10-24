"use client";

import { ConfettiStore } from "@/hooks/confetti-store";
import ReactConfetti from "react-confetti";

export const ConfettiProvider = () => {
    const confetti = ConfettiStore();

    if (!confetti.isOpen) {
        return null;
    }

    return (
        <ReactConfetti 
        className="pointer-events-none z-[100]"
        numberOfPieces={400}
        recycle={false}
        onConfettiComplete={() => {
            confetti.onClose();
        }}
        />
    )
}