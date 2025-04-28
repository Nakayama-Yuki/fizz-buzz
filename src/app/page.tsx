import FizzBuzzInteractive from "@/components/Interactive";

/**
 * FizzBuzzアプリケーションのメインページ
 * サーバーコンポーネントとして実装され、静的な部分はサーバーでレンダリングされる
 */
export default function Home() {
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

      {/* クライアントコンポーネントのインタラクティブな部分 */}
      <FizzBuzzInteractive />
    </main>
  );
}
