import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "abdul kader | full stack developer",
  description: "abdul kader | full stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/logo.svg" />
        <title>{metadata.title}</title>
      </head>
      <body className="lg:cursor-none bg-bg_primary text-slate-50 font-[Satoshi]">
        {children}
      </body>
    </html>
  );
}
