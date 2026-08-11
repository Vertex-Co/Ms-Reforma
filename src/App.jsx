import Header from './components/Header'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import Services from './sections/Services'
import About from './sections/About'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App