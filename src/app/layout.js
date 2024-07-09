import "./globals.css";
import { Poppins, Dancing_Script } from 'next/font/google'

export const metadata = {
  title: 'Luana Beatriz | Portfolio',
  description: 'Full-stack developer',
}

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '300', '200', '100'],
  subsets: ['latin'],
  variable: '--font-poppins',
})
const dancing = Dancing_Script({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dancing',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dancing.variable} font-sans bg-custom-gradient bg-no-repeat bg-cover h-full overflow-x-hidden`}>{children}</body>
    </html>
  );
}
