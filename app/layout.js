import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = "https://arzooahmed01.netlify.app";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Arzoo Ahmed - MERN Stack Developer & Full-Stack Engineer",
    template: "%s | Arzoo Ahmed",
  },

  description:
    "Arzoo Ahmed is a Junior MERN Stack Developer and Full-Stack Web Developer from Bangladesh specializing in React, Next.js, Node.js, Express.js and MongoDB.",

  keywords: [
    "Arzoo Ahmed",
    "MERN Stack Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Bangladesh",
    "Dhaka",
    "Junior Developer",
    "Web Developer",
  ],

  authors: [{ name: "Arzoo Ahmed", url: siteUrl }],
  creator: "Arzoo Ahmed",
  publisher: "Arzoo Ahmed",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Arzoo Ahmed — MERN Stack Developer",
    title: "Arzoo Ahmed - MERN Stack Developer & Full-Stack Engineer",
    description:
      "Arzoo Ahmed is a Junior MERN Stack Developer and Full-Stack Web Developer from Bangladesh specializing in React, Next.js, Node.js, Express.js and MongoDB.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arzoo Ahmed — Junior MERN Stack Developer from Bangladesh",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arzoo Ahmed - MERN Stack Developer & Full-Stack Engineer",
    description:
      "Junior MERN Stack Developer from Bangladesh. Building modern web apps with React, Next.js, Node.js and MongoDB.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.svg",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Arzoo Ahmed",
        url: siteUrl,
        jobTitle: "Junior MERN Stack Developer & Full-Stack Web Developer",
        description:
          "Junior MERN Stack Developer and Full-Stack Web Developer from Dhaka, Bangladesh. Specializes in React, Next.js, Node.js, Express.js and MongoDB.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "BD",
        },
        sameAs: [
          "https://github.com/arzooahmed",
          "https://linkedin.com/in/arzooahmed",
        ],
        knowsAbout: [
          "React.js",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "JavaScript",
          "Full-Stack Web Development",
          "MERN Stack",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Arzoo Ahmed — Portfolio",
        description: "Personal developer portfolio of Arzoo Ahmed",
        author: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: "Arzoo Ahmed — MERN Stack Developer Portfolio",
        mainEntity: { "@id": `${siteUrl}/#person` },
        isPartOf: { "@id": `${siteUrl}/#website` },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        {/* Theme initializer — prevents flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var stored = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = stored || (prefersDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              } catch(e) {
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            `,
          }}
        />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
