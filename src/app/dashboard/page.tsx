import ScrollTest from "@/components/utility/scroll-test";
import Link from "next/link";

export default function TestPage() {
  return (
    <Link href="/page">
      <ScrollTest />
    </Link>
  );
}
