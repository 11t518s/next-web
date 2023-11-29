import type { Metadata } from "next";
import Providers from "~/app/provider";
import withGlobalComponents from "~/globalComponents/hocs";

export const metadata: Metadata = {
  title: "client",
  description: "description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("aaa");
  return (
    <html>
      <Providers>{children}</Providers>
    </html>
  );
}
