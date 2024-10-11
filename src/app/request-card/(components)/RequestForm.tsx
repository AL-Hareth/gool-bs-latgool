"use client";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function RequestForm({ sendCardRequest }: { sendCardRequest: any }) {

  const formRef = useRef<HTMLFormElement>(null);

  function submitForm(formData: any) {
    try {
      sendCardRequest(formData); // runs a server action to insert data
      toast.success("تمت العملية بنجاح");

      // clear the input fields
      if(formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      toast.error("حدث خطأ ما");
      console.log(error);
    }
  }

  return (
    <form ref={formRef} className="flex flex-col gap-4 arabic-regular" method="post" action={submitForm}>
      <h1 className="text-4xl arabic-medium text-center mb-4">طلب بطاقة</h1>
      <input
        dir="rtl"
        type="text"
        name="mainWord"
        placeholder="الكلمة الرئيسية"
        required
        className="input input-bordered border-green-400 w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" dir="rtl">
        <input
          dir="rtl"
          type="text"
          name="blockWord1"
          placeholder="الكلمة الممنوعة 1"
          required
          className="input input-bordered border-red-400 w-full"
        />
        <input
          dir="rtl"
          type="text"
          name="blockWord2"
          placeholder="الكلمة الممنوعة 2"
          required
          className="input input-bordered border-red-400 w-full"
        />
        <input
          dir="rtl"
          type="text"
          name="blockWord3"
          placeholder="الكلمة الممنوعة 3"
          required
          className="input input-bordered border-red-400 w-full"
        />
        <input
          dir="rtl"
          type="text"
          name="blockWord4"
          placeholder="الكلمة الممنوعة 4"
          required
          className="input input-bordered border-red-400 w-full"
        />
        <input
          dir="rtl"
          type="text"
          name="blockWord5"
          placeholder="الكلمة الممنوعة 5"
          required
          className="input input-bordered border-red-400 w-full"
        />
        <button type="submit" className="btn btn-info text-white">ارسال</button>
      </div>
    </form>
  );
}
