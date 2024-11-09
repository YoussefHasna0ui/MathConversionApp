import { useAtom } from "jotai";
import {
  categoryAtom,
  fromUnitAtom,
  toUnitAtom,
  valueAtom,
  resultAtom,
} from "../../../Atoms";
import { UnitCategory, UnitMap } from "../../../utils";

export const UnitConverter = () => {
  const [category, setCategory] = useAtom(categoryAtom);
  const [fromUnit, setFromUnit] = useAtom(fromUnitAtom);
  const [toUnit, setToUnit] = useAtom(toUnitAtom);
  const [value, setValue] = useAtom(valueAtom);
  const [result] = useAtom(resultAtom);

  const units: Record<UnitCategory, string[]> = {
    length: [
      "meters",
      "kilometers",
      "centimeters",
      "millimeters",
      "inches",
      "feet",
      "yards",
      "miles",
    ],
    mass: ["grams", "kilograms", "milligrams", "ounces", "pounds", "tons"],
    volume: [
      "liters",
      "milliliters",
      "cubicMeters",
      "gallons",
      "quarts",
      "pints",
      "cups",
    ],
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
        Unit Converter
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Category:
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as UnitCategory)}
          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          {Object.keys(units).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          From Unit:
        </label>
        <select
          value={fromUnit}
          onChange={(e) =>
            setFromUnit(e.target.value as UnitMap[typeof category])
          }
          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          {units[category].map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          To Unit:
        </label>
        <select
          value={toUnit}
          onChange={(e) =>
            setToUnit(e.target.value as UnitMap[typeof category])
          }
          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          {units[category].map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Value:
        </label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-6 text-center">
        <p className="text-lg font-medium text-gray-700">
          Converted Result:{" "}
          <span className="text-indigo-600 font-semibold">{result}</span>
        </p>
      </div>
    </div>
  );
};

export default UnitConverter;
