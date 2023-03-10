import "tailwindcss/tailwind.css";
import * as dotenv from "dotenv";

dotenv.config();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-orange">{children}</body>
    </html>
  );
}
