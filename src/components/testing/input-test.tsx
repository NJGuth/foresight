import { Button } from "../ui/button";

export default function InputTest() {
  return (
    <div className=" px-6 py-32 lg:px-8">
      <div className="border flex gap-3 rounded p-6">
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    </div>
  );
}
