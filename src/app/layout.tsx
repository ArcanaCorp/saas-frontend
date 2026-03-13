import { AuthProvider } from "../context/AuthContext";
import { Poppins } from "next/font/google";
import Header from "../components/Header";
import "@/assets/theme.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-poppins-sans",
});

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
    <html lang="es" className={`${poppins.variable}`}>

      <body className="w-screen h-screen bg">

        <AuthProvider>

          <Header />

          {children}

        </AuthProvider>

      </body>

    </html>
  );
}