// ./app/layout.tsx

import { draftMode } from "next/headers";
import "./globals.css";
import VisualEditing from "@/components/VisualEditing";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        {children}
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}