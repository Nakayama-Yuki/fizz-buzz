import Interactive from "@/components/Interactive";

/**
 * FizzBuzzアプリケーションのメインページ
 * サーバーコンポーネントとして実装され、静的な部分はサーバーでレンダリングされる
 */
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">FizzBuzz</h1>

      {/* FizzBuzzのルール */}
      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2">ルール</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>3の倍数でなく、5の倍数でもないときは整数をそのまま出力</li>
          <li>3の倍数であり、5の倍数でないときは「Fizz」を出力</li>
          <li>3の倍数でなく、5の倍数であるときは「Buzz」を出力</li>
          <li>3の倍数であり、5の倍数でもあるときは「FizzBuzz」を出力</li>
        </ul>
      </div>

      {/* アプリの注意事項 */}
      <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg mb-6 border-l-4 border-amber-500">
        <h2 className="text-xl font-semibold mb-2">注意事項:</h2>
        <p>
          パフォーマンスの観点から、結果表示は最大1000件までに制限されています。より広い範囲を指定した場合は、最初の1000件のみが表示されます。
        </p>
      </div>

      {/* クライアントコンポーネントのインタラクティブな部分 */}
      <Interactive />
    </main>
  );
}
