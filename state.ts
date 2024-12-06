import { atom } from "jotai";

export const roleAtom = atom<"provider" | "user" | null>(null);
