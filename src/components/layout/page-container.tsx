export default function PageContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="p-6 container mx-auto max-w-screen-3xl">{children}</main>
  );
}
