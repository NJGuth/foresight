import { SidebarTrigger } from "../ui/sidebar";

export default function MainHeader({ title }: { title: string }) {
  return (
    <header className="sticky px-5 top-0 z-10 flex h-16 shrink-0 items-center gap-2 bg-background/90 backdrop-blur-3xl border-b border-transparent ">
      <SidebarTrigger />
      <h1 className="flex-1 text-base font-semibold">{title}</h1>
    </header>
  );
}
