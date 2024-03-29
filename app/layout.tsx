import NavMenu from '@/app/NavMenu';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import AuthProvider from './AuthProvider';

const myFont = Open_Sans({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={myFont.className}>
          <NavMenu />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
