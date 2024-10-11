import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-5xl font-bold arabic-medium mb-10">قول بس لا تقول</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/game" className="text-lg arabic-regular btn btn-success text-white my-2">
          العب
        </Link>
        <Link href="/request-card" className="text-lg arabic-regular btn btn-accent text-white my-2  px-8">
          طلب إضافة كارت
        </Link>
      </div>
    </div>
  );
}
