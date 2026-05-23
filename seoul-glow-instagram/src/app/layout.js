export const metadata = {
  title: "Seoul Glow UAE — Instagram Creator",
  description: "AI-powered Instagram content creator for Seoul Glow UAE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, padding: 0, background: "#0D0D1A" }}>
        {children}
      </body>
    </html>
  );
}
