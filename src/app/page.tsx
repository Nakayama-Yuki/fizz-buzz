"use client";

import { useState } from "react";

/**
 * FizzBuzzアプリケーション
 * ルール：
 * 1. 3の倍数でなく、5の倍数でもないときは整数をそのまま出力
 * 2. 3の倍数であり、5の倍数でないときはFizzを出力
 * 3. 3の倍数でなく、5の倍数であるときはBuzzを出力
 * 4. 3の倍数であり、5の倍数でもあるときはFizzBuzzを出力
 */

export default function Home() {
  // 開始値と終了値のステート
  const [startNumber, setStartNumber] = useState<number>(1);
  const [endNumber, setEndNumber] = useState<number>(100);

  /**
   * FizzBuzzのロジックを適用する関数
   * @param num 判定する数値
   * @returns FizzBuzz判定結果
   */
  function getFizzBuzzResult(num: number): string {
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num.toString();
  }

  /**
   * 指定された範囲のFizzBuzz結果を生成する
   * @returns FizzBuzz結果の配列
   */
  function generateFizzBuzzResults(): { number: number; result: string }[] {
    const results = [];
    const start = Math.min(startNumber, endNumber);
    const end = Math.max(startNumber, endNumber);

    // 1000件以上の結果は処理が重くなるため制限
    const limit = Math.min(end, start + 1000);

    for (let i = start; i <= limit; i++) {
      results.push({
        number: i,
        result: getFizzBuzzResult(i),
      });
    }

    return results;
  }

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
  const fizzBuzzResults = generateFizzBuzzResults();

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">FizzBuzz</h1>

      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-6">
        <p className="mb-4">ルール:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>3の倍数でなく、5の倍数でもないときは整数をそのまま出力</li>
          <li>3の倍数であり、5の倍数でないときは「Fizz」を出力</li>
          <li>3の倍数でなく、5の倍数であるときは「Buzz」を出力</li>
          <li>3の倍数であり、5の倍数でもあるときは「FizzBuzz」を出力</li>
        </ul>
      </div>

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
    </main>
  );
}
