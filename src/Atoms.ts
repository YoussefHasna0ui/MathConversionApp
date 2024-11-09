import { atom } from "jotai";
import { UnitCategory, LengthUnit, MassUnit, VolumeUnit, convertUnits, PageType, UnitMap } from "./utils";

export const pageType = atom<PageType>("Conv");

export const categoryAtom = atom<UnitCategory>("length");

export const fromUnitAtom = atom<LengthUnit | MassUnit | VolumeUnit>("meters");
export const toUnitAtom = atom<LengthUnit | MassUnit | VolumeUnit>("kilometers");


export const valueAtom = atom<number>(1);

export const resultAtom = atom((get) => {
  const category = get(categoryAtom);
  const fromUnit = get(fromUnitAtom);
  const toUnit = get(toUnitAtom);
  const value = get(valueAtom);

  const validValue = isNaN(value) ? 1 : value;

  const result = convertUnits(validValue, fromUnit as UnitMap[typeof category], toUnit as UnitMap[typeof category], category);

  return isNaN(result) ? 0 : result;
});
