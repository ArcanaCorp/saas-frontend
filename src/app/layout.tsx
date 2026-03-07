import "./globals.css";
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "SaaS Panel",
  description: "Panel administrativo"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="es">

      <body>

        <AuthProvider>
          {children}
        </AuthProvider>

      </body>

    </html>
  );
}