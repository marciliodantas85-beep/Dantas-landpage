import { ContactCTA } from './components/ContactCTA'
import { Differentials } from './components/Differentials'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { WorkProcess } from './components/WorkProcess'

function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f2f2f2_0%,#ffffff_30%,#f5f5f5_100%)] text-[#292929]">
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <WorkProcess />
        <Experience />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
