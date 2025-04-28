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
  // 入力エラーのステート
  const [startError, setStartError] = useState<string>("");
  const [endError, setEndError] = useState<string>("");

  /**
   * 入力値が有効な自然数（1以上の整数）かチェックする
   * @param value 検証する値
   * @returns 1以上の整数であればtrue、それ以外はfalse
   */
  const isValidNumber = (value: number): boolean => {
    return !isNaN(value) && value >= 1 && Number.isInteger(value);
  };

  /**
   * 開始値と終了値の範囲が妥当かチェックし、エラーメッセージを返す
   */
  const getRangeError = () => {
    // 両方の値が有効な場合のみ範囲チェックを行う
    if (isValidNumber(startNumber) && isValidNumber(endNumber)) {
      if (startNumber > endNumber) {
        return "開始値は終了値以下である必要があります";
      }
    }
    return "";
  };

  /**
   * 開始値が変更されたときのハンドラー
   * 1以上の自然数のみ許可
   */
  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const parsedValue = parseInt(inputValue);

    if (inputValue === "") {
      // 入力が空の場合はデフォルト値に設定
      setStartNumber(1);
      setStartError("");
    } else if (!isValidNumber(parsedValue)) {
      // 無効な値の場合はエラーメッセージを表示
      setStartNumber(parsedValue);
      setStartError("1以上の整数を入力してください");
    } else {
      // 有効な値の場合
      setStartNumber(parsedValue);
      setStartError("");
    }
  };

  /**
   * 終了値が変更されたときのハンドラー
   * 1以上の自然数のみ許可
   */
  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const parsedValue = parseInt(inputValue);

    if (inputValue === "") {
      // 入力が空の場合はデフォルト値に設定
      setEndNumber(100);
      setEndError("");
    } else if (!isValidNumber(parsedValue)) {
      // 無効な値の場合はエラーメッセージを表示
      setEndNumber(parsedValue);
      setEndError("1以上の整数を入力してください");
    } else {
      // 有効な値の場合
      setEndNumber(parsedValue);
      setEndError("");
    }
  };

  // 結果を生成する前に入力値を検証して調整
  const validStart = isValidNumber(startNumber) ? startNumber : 1;
  const validEnd = isValidNumber(endNumber) ? endNumber : 100;

  // 範囲エラーを取得
  const rangeError = getRangeError();

  // 有効な範囲である場合のみFizzBuzz結果を生成
  const fizzBuzzResults = !rangeError
    ? generateFizzBuzzResults(validStart, validEnd)
    : [];

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label htmlFor="start-number" className="block mb-2">
            開始値:
          </label>
          <input
            id="start-number"
            type="number"
            value={startNumber}
            onChange={handleStartChange}
            min="1"
            step="1"
            className={`w-full p-2 border rounded ${
              startError ? "border-red-500" : "border-gray-300"
            }`}
            aria-label="開始値"
            aria-describedby={startError ? "start-error" : undefined}
          />
          {startError && (
            <p id="start-error" className="mt-1 text-sm text-red-600">
              {startError}
            </p>
          )}
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
            min="1"
            step="1"
            className={`w-full p-2 border rounded ${
              endError ? "border-red-500" : "border-gray-300"
            }`}
            aria-label="終了値"
            aria-describedby={endError ? "end-error" : undefined}
          />
          {endError && (
            <p id="end-error" className="mt-1 text-sm text-red-600">
              {endError}
            </p>
          )}
        </div>
      </div>

      {/* 範囲エラーメッセージ */}
      {rangeError && (
        <div
          className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded"
          role="alert">
          <p id="range-error">{rangeError}</p>
        </div>
      )}

      {/* 結果が空の場合のメッセージ */}
      {fizzBuzzResults.length === 0 && (
        <div className="py-8 text-center text-gray-500">
          <p>有効な範囲を入力してください</p>
        </div>
      )}

      {/* FizzBuzz結果テーブル */}
      {fizzBuzzResults.length > 0 && (
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
      )}
    </>
  );
}
