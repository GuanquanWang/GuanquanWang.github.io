import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://guanquanwang.github.io"),
  title: "Guanquan Wang — Robot Learning Researcher",
  description:
    "Guanquan Wang is a University of Tokyo Ph.D. candidate researching efficient generative trajectory planning, offline reinforcement learning, and embodied AI.",
  keywords: [
    "Guanquan Wang",
    "王冠権",
    "Robot Learning",
    "Embodied AI",
    "Reinforcement Learning",
    "Trajectory Planning",
    "University of Tokyo",
  ],
  authors: [{ name: "Guanquan Wang" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/wang-guanquan.jpg",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Guanquan Wang — Research Portfolio",
    title: "Guanquan Wang — Robot Learning Researcher",
    description:
      "Research on generative trajectory planning, offline reinforcement learning, and robot learning.",
    images: [
      {
        url: "/og-simple.png",
        width: 1731,
        height: 909,
        alt: "Guanquan Wang — Robot Learning Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guanquan Wang — Robot Learning Researcher",
    description:
      "Research on generative trajectory planning, offline reinforcement learning, and robot learning.",
    images: ["/og-simple.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
