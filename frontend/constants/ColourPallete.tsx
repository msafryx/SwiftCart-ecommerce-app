import type from "ajv/lib/vocabularies/jtd/type";

export const COLORS={
    darkGray:'#989fa1',
    darkOrange:'#cc2c1e',
    light:'#FFF',
    blue:'#3498db',
    primary:'#2c3e50',
}as const;

export type ColorTypes = keyof typeof COLORS;