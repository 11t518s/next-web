import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "client test",
  description: "clent test meta",
};

export default function ClientLayout({
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
