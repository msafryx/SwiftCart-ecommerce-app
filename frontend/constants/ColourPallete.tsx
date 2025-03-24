import type from "ajv/lib/vocabularies/jtd/type";

export const COLORS={
    darkGray:'#bdc3c7',
    darkOrange:'#e74c3c'
}as const;

export type ColorTypes = keyof typeof COLORS;