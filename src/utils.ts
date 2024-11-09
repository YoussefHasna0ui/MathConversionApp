// utils.ts
import conversionData from "./units.json";

export type UnitCategory = "length" | "mass" | "volume";

export type LengthUnit = "meters" | "kilometers" | "centimeters" | "millimeters" | "inches" | "feet" | "yards" | "miles";
export type MassUnit = "grams" | "kilograms" | "milligrams" | "ounces" | "pounds" | "tons";
export type VolumeUnit = "liters" | "milliliters" | "cubicMeters" | "gallons" | "quarts" | "pints" | "cups";
export type PageType = "Conv" | "About" | "Contact" ;
export type UnitMap = {
    length: LengthUnit;
    mass: MassUnit;
    volume: VolumeUnit;
};

export const conversionFactors = conversionData as {
    [K in UnitCategory]: Record<UnitMap[K], number>
};

export function convertUnits<T extends UnitCategory>(
    value: number,
    fromUnit: UnitMap[T],
    toUnit: UnitMap[T],
    category: T
): number {
    const factors = conversionFactors[category];
    if (!factors[fromUnit] || !factors[toUnit]) {
        throw new Error("Invalid units for category");
    }
    
    const valueInBaseUnit = value / factors[fromUnit];
    return parseFloat((valueInBaseUnit * factors[toUnit]).toFixed(5));
}
