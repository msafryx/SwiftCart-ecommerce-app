import type from "ajv/lib/vocabularies/jtd/type";

export const COLORS={
    darkGray:'#989fa1',
    darkOrange:'#cc2c1e',
    light:'#FFF'
}as const;

export type ColorTypes = keyof typeof COLORS;