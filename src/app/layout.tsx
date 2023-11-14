import type { Metadata } from "next";
import Providers from "~/app/provider";

export const metadata: Metadata = {
  title: "client",
  description: "description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Providers>{children}</Providers>
    </html>
  );
}
