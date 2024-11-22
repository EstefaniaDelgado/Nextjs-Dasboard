import { monserrat } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>
      <header className='text-center bg-blue-300 w-full'>
        <h2>Esto es el header 😄</h2>
        </header>
        
        {children}
        <footer className='py-5 flex justify-center bg-blue-300'>Aprendiendo NextJs 😵</footer>
        
        </body>

       
    </html>
  );
}
