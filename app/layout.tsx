import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ReduxProvider from '@import/redux/ReduxProvider';
import ThemeProvider from '@import/ThemeProvider';
import { NextAuthProvider } from '@import/containers/AuthProvider';

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Kanban Board',
  description: 'Kanban board for project management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          storageKey="theme"
          enableColorScheme={false}
        >
          <NextAuthProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
