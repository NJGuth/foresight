import { SidebarTrigger } from "../ui/sidebar";

interface MainHeaderProps {
  title: string;
  actions?: React.ReactNode;
}

export default function MainHeader({ title, actions }: MainHeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex items-center h-16 gap-2 px-5 border-b border-transparent shrink-0 bg-background backdrop-blur-3xl ">
      <SidebarTrigger />
      <h1 className="flex-1 text-base font-semibold">{title}</h1>
      {actions}
    </header>
  );
}
