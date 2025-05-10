import "./globals.css";

export const metadata = {
  title: 'Dec 17 | Under Maintenance',
  description: 'Our platform is launching soon. Stay tuned!',
  icons: {
    icon: '/dec17_logo_white.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
