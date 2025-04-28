/**
 * FizzBuzzのロジックを適用する関数
 * @param num 判定する数値
 * @returns FizzBuzz判定結果
 */
export function getFizzBuzzResult(num: number): string {
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num.toString();
}

/**
 * 指定された範囲のFizzBuzz結果を生成する
 * @param startNumber 開始値
 * @param endNumber 終了値
 * @returns FizzBuzz結果の配列
 */
export function generateFizzBuzzResults(
  startNumber: number,
  endNumber: number
): { number: number; result: string }[] {
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
