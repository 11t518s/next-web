import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "deps test",
  description: "deps test meta",
};

export default function DepsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
