import { Outfit } from 'next/font/google'

// These styles apply to every route in the application
import '@/styles/globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Tailwind Responsive Starter Code',
  description: 'Responsive layout and components using Tailwind CSS for all screen sizes - mobile, tablet and desktops.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* The body is a flex container with its items centered horizontally and aligned to the top vertically. 
      It has a minimum height of the screen's height and the text color is set to white. */}
      <body className={`flex justify-center items-stretch min-h-screen text-white ${outfit.className}`}>
        {/* The children are wrapped inside a div that takes up 80% of its parent's width. */}
        <div className="w-4/5 outline outline-black outline-4">
          {children}
        </div>
      </body>
    </html>
  )
}
