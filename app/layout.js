export const metadata = {
  title: 'Hello',
  description: 'A welcoming application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
