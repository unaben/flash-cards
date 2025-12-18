import AppHydration from "@/components/AppHydration/AppHydration";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppHydration>
        {children}
        </AppHydration>
        </body>
    </html>
  );
}
