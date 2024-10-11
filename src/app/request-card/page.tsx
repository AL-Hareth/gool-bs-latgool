import { insertCard } from "@/db/schema";
import RequestForm from "./(components)/RequestForm";
import Link from "next/link";

async function sendCardRequest(data: FormData) {
  "use server";

  // Get the data from the formData object
  const rawFormData = {
    mainWord: data.get("mainWord"),
    blockWord1: data.get("blockWord1"),
    blockWord2: data.get("blockWord2"),
    blockWord3: data.get("blockWord3"),
    blockWord4: data.get("blockWord4"),
    blockWord5: data.get("blockWord5"),
  };

  await insertCard(rawFormData as any);
}

export default function RequestCard() {
  return (
    <>
      <RequestForm
        sendCardRequest={sendCardRequest}
      />
      <Link href="/" className="text-lg arabic-regular btn btn-accent text-white my-2  px-8">
        العودة
      </Link>
    </>
  );
}
