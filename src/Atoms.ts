import { atom } from "jotai";
import { UnitCategory, LengthUnit, MassUnit, VolumeUnit, convertUnits,PageType } from "./utils";
export const pageType = atom<PageType>("Conv")
export const categoryAtom = atom<UnitCategory>("length");
export const fromUnitAtom = atom<LengthUnit | MassUnit | VolumeUnit>("meters");
export const toUnitAtom = atom<LengthUnit | MassUnit | VolumeUnit>("kilometers");
export const valueAtom = atom<number>(1);

export const resultAtom = atom((get) => {
    const category = get(categoryAtom);
    const fromUnit = get(fromUnitAtom);
    const toUnit = get(toUnitAtom);
    const value = get(valueAtom);
    
    return convertUnits(value, fromUnit as any, toUnit as any, category);
});
