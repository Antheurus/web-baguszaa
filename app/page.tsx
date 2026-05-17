import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <div className="divider" />
        <Portfolio />
        <div className="divider" />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
