import ScrollTest from "@/components/utility/scroll-test";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <Link href="/page" className="outline-none">
      <ScrollTest />
    </Link>
  );
}
