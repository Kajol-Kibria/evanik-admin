import { Urbanist } from "next/font/google";
import "../globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Navbar from "@/components/Navbar";



const urbanist = Urbanist({
  weight: ["300", "500", "600", "700", "800", "900", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Evanik User Dashboard",
  description: "Eccommerce Management software for online sellers",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}`} id="root">
        <AppRouterCacheProvider
          options={{
            prepend: true,
          }}
        >
          <div>
            <Navbar>{children}</Navbar>
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
