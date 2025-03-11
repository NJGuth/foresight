export default function TypographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-6 mx-auto container max-w-3xl">{children}</div>;
}
