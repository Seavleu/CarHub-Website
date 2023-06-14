import { Navbar,Footer } from '@/components';
import './globals.css'


export const metadata = {
  title: 'Car Hubs',
  description: 'Discover the best car in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* self closing component */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
