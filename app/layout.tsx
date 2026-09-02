import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const title = "ARCO - Marketing para Advogados";
const description =
  "Ajudamos escritórios de Direito Previdenciário a aumentar a entrada de novos clientes com uma estratégia contínua de aquisição.";

export const metadata: Metadata = {
  // sem metadataBase as URLs de OG/canonical saem relativas e o Next avisa no build
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Instância",
    title: "Instância — Aquisição para advocacia previdenciária",
    description: "Mais clientes para o seu escritório de advocacia previdenciária.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instância — Aquisição para advocacia previdenciária",
    description: "Mais clientes para o seu escritório de advocacia previdenciária.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
