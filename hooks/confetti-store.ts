import { create } from "zustand";

type ConfettiStoreType = {
    isOpen: Boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const ConfettiStore = create<ConfettiStoreType>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));