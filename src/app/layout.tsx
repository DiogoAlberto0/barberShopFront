import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
// import localFont from "next/font/local";
// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

export const metadata: Metadata = {
    title: "Hora do corte",
    description: "Marque seu horário",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (

        <html lang="pt-br" >
            <body
                className="h-screen flex flex-col"
            >
                <NavBar />
                <main className="h-full overflow-auto p-1 md:p-4">
                    {children}
                </main>
            </body>
        </html>

    );
}
