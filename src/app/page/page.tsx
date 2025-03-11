import Link from "next/link";

export default function TestPage() {
  return (
    <div>
      Test page
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
}
