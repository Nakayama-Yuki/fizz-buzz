"use client";

import { useState } from "react";
import { generateFizzBuzzResults } from "@/utils/fizzBuzz";

/**
 * FizzBuzzのインタラクティブなコンポーネント
 * ユーザーが開始値と終了値を入力し、FizzBuzzの結果を表示する
 */
export default function Interactive() {
  // 開始値と終了値のステート
  const [startNumber, setStartNumber] = useState<number>(1);
  const [endNumber, setEndNumber] = useState<number>(100);

  // 入力値が変更されたときのハンドラー
  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setStartNumber(isNaN(value) ? 1 : value);
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setEndNumber(isNaN(value) ? 100 : value);
  };

  // FizzBuzz結果の生成
  const fizzBuzzResults = generateFizzBuzzResults(startNumber, endNumber);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label htmlFor="start-number" className="block mb-2">
            開始値:
          </label>
          <input
            id="start-number"
            type="number"
            value={startNumber}
            onChange={handleStartChange}
            className="w-full p-2 border border-gray-300 rounded"
            aria-label="開始値"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="end-number" className="block mb-2">
            終了値:
          </label>
          <input
            id="end-number"
            type="number"
            value={endNumber}
            onChange={handleEndChange}
            className="w-full p-2 border border-gray-300 rounded"
            aria-label="終了値"
          />
        </div>
      </div>

      <div className="overflow-auto max-h-[60vh] border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                数値
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                結果
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200">
            {fizzBuzzResults.map(({ number, result }) => (
              <tr
                key={number}
                className={
                  result !== number.toString()
                    ? "bg-blue-50 dark:bg-blue-900/20"
                    : ""
                }>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  {number}
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm">
                  <span
                    className={`
                    px-2 py-1 rounded 
                    ${
                      result === "Fizz"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                        : ""
                    }
                    ${
                      result === "Buzz"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300"
                        : ""
                    }
                    ${
                      result === "FizzBuzz"
                        ? "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300"
                        : ""
                    }
                  `}>
                    {result}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
