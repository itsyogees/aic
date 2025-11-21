import '../app/globals.scss'
import Navbar from './component/Navbar/page'
import Footer from './component/Footer/page'

export const metadata = {
  title: 'AIC - Crescent Innovation & Incubation Council',
  description: 'Fostering innovation in Clean Technology and Smart Mobility',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-cormorant">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}