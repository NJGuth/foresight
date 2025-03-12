import InputTest from "@/components/testing/input-test";
import TypeTest from "@/components/testing/type-test";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/dashboard">Go to dashboard</Link>
    </main>
  );
}
