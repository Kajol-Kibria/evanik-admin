import "../globals.css";

export const metadata = {
  title: "Register - Evanik",
  description: "Register your account on Evanik",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body id="root">
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
} 