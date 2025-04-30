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
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-xl font-semibold">ルール</h2>
          {/* popoverで注意事項を表示する */}
          <button
            popoverTarget="mypopover"
            className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            aria-label="注意事項を表示する">
            ?
          </button>
          <div
            id="mypopover"
            popover="auto"
            className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 max-w-xs"
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
            }}>
            <h3 className="font-semibold text-amber-600 dark:text-amber-500 mb-2">
              注意事項:
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              パフォーマンスの観点から、結果表示は最大1000件までに制限されています。より広い範囲を指定した場合は、最初の1000件のみが表示されます。
            </p>
          </div>
        </div>

        <ul className="list-disc pl-6 space-y-1">
          <li>3の倍数でなく、5の倍数でもないときは整数をそのまま出力</li>
          <li>3の倍数であり、5の倍数でないときは「Fizz」を出力</li>
          <li>3の倍数でなく、5の倍数であるときは「Buzz」を出力</li>
          <li>3の倍数であり、5の倍数でもあるときは「FizzBuzz」を出力</li>
        </ul>
      </div>

      {/* クライアントコンポーネントのインタラクティブな部分 */}
      <Interactive />
    </main>
  );
}
