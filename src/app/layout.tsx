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
  return withGlobalComponents(
    <html>
      <Providers>{children}</Providers>
    </html>,
  );
}
