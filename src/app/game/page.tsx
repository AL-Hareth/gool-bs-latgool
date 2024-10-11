import Link from "next/link";

export default function Game() {
  return (
    <div className="md:w-2/3 mx-auto flex flex-col">
      <h1 className="text-center arabic-medium text-3xl md:text-5xl mt-2 mb-4">شروط اللعبة</h1>
      <ul className="arabic-regular text-lg list-disc md:text-xl pr-8" dir="rtl">
        <li>تقسيم اللاعبين إلى فريقين</li>
        <li>عند بدء اللعبة ستظهر لك بطاقة عليك وصفها لفريقك دون قول الكمات المحظورة</li>
        <li>إذا قلت الكلمة المحظورة تخسر الدور</li>
        <li>معك دقيقة لوصف الكلمة قبل الذهاب للبطاقة التالية</li>
        <li>معاك فرصتين تخطي فقط</li>
      </ul>
      <Link href="/play" className="btn btn-success text-white mt-4 text-lg arabic-regular">بدء اللعبة</Link>
    </div>
  );
}
