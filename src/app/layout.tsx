import Header from '@/components/Header';
import { AuthProvider } from '@/hooks/useAuth';
import './globals.css'; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <AuthProvider>
          <Header />           {/* ICI, sous AuthProvider */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
