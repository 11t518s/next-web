import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "client",
  description: "description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html>{children}</html>;
}
